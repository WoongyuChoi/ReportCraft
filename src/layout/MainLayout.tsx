import { PDFViewer } from "@react-pdf/renderer";
import SecuritiesReport from "./SecuritiesReport";

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
        <SecuritiesReport title={"Securities Report"} version={"v1.0.0"} />
      </PDFViewer>
    </div>
  );
};

export default MainLayout;
