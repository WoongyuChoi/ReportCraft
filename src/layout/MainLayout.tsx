import { PDFViewer } from "@react-pdf/renderer";
import FinancialTableReport from "./FinancialTableReport";

const MainLayout = () => {
  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "#f0f2f5",
        borderRadius: 4,
      }}
    >
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <FinancialTableReport />
      </PDFViewer>
    </div>
  );
};

export default MainLayout;
