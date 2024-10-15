import { PDFViewer } from "@react-pdf/renderer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinancialReport from "./layout/FinancialReport.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <PDFViewer style={{ width: "90%", maxWidth: "800px", height: "90vh" }}>
        <FinancialReport />
      </PDFViewer>
    </div>
  </StrictMode>
);
