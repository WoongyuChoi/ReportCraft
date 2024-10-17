import { BlobProvider } from "@react-pdf/renderer";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import FinancialTableReport from "./layout/FinancialTableReport.tsx";

// PDFJSViewer 컴포넌트
interface PDFJSViewerProps {
  pdfBlob: Blob;
}

const PDFJSViewer = ({ pdfBlob }: PDFJSViewerProps) => {
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const [pdfDocument, setPdfDocument] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const loadPDF = async () => {
      const pdfUrl = URL.createObjectURL(pdfBlob);

      pdfjsLib.GlobalWorkerOptions.workerSrc = "./libs/pdf.worker.mjs";
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setPdfDocument(pdf);
    };

    loadPDF();

    return () => {
      if (viewerContainerRef.current) {
        viewerContainerRef.current.innerHTML = "";
      }
    };
  }, [pdfBlob]);

  useEffect(() => {
    const renderPage = async () => {
      if (pdfDocument && viewerContainerRef.current) {
        const page = await pdfDocument.getPage(currentPage);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        if (viewerContainerRef.current) {
          viewerContainerRef.current.innerHTML = ""; // 기존 페이지 제거
          viewerContainerRef.current.appendChild(canvas);
        }

        if (context) {
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
        }
      }
    };

    renderPage();
  }, [pdfDocument, currentPage, scale]);

  const handlePreviousPage = () => {
    if (pdfDocument && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pdfDocument && currentPage < pdfDocument.numPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.2);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {pdfDocument?.numPages || 0}
        </span>
        <button
          onClick={handleNextPage}
          disabled={pdfDocument && currentPage === pdfDocument.numPages}
        >
          Next
        </button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div
        ref={viewerContainerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "90vh",
          overflow: "auto",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

// App 컴포넌트
const App = () => (
  <StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        fontFamily: "Pretendard",
      }}
    >
      <BlobProvider document={<FinancialTableReport />}>
        {({ blob, loading, error }) => {
          if (loading) return <p>Loading document...</p>;
          if (error) return <p>Error generating document</p>;

          return blob ? <PDFJSViewer pdfBlob={blob} /> : null;
        }}
      </BlobProvider>
    </div>
  </StrictMode>
);

// 루트 렌더링
createRoot(document.getElementById("root")!).render(<App />);
