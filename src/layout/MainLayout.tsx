import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { reports } from "../data/SecuritiesConstant";
import SecuritiesReport from "./SecuritiesReport";

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "#f0f2f5",
        borderRadius: 4,
      }}
    >
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{
          padding: "15px 30px",
          backgroundColor: "#1890ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Open Securities Report
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 15px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <PDFViewer style={{ width: "100%", height: "100%" }}>
              <SecuritiesReport
                title={"Securities Report"}
                subTitle={"The Clock of Normalization is Running Well..."}
                version={"v1.0.0"}
                reports={reports}
              />
            </PDFViewer>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
