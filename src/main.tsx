import { PDFViewer } from "@react-pdf/renderer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FinancialReport from "./layout/FinancialReport.tsx";
import FinancialTableReport from "./layout/FinancialTableReport.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        fontFamily: "SpoqaHanSans",
      }}
    >
      <PDFViewer style={{ width: "100%", maxWidth: "800px", height: "90vh" }}>
        {/* <FinancialReport /> */}
        <FinancialTableReport />
      </PDFViewer>
    </div>
  </StrictMode>
);
