import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { Report } from "../common/Report";
import { getTimeStamp, getTodayDate } from "../utils/dateUtils";
import Header from "./Header";

const SecuritiesReport = ({
  title,
  version,
  reports,
}: {
  title: string;
  version?: string;
  reports?: Report[];
}) => {
  return (
    <Document title={title}>
      <Page size="A4" orientation="portrait" style={{ paddingBottom: "100px" }}>
        <Header title={title} date={getTodayDate()} />

        {title && (
          <View
            style={{
              margin: "0px 60px 30px 60px",
              color: "#003E7E",
            }}
          >
            <Text
              style={{
                fontSize: "20px",
                fontWeight: 400,
                fontFamily: "Pretendard",
              }}
            >
              {title}
            </Text>
          </View>
        )}

        {reports?.map((report: Report, index: number) => (
          <React.Fragment key={index}>{}</React.Fragment>
        ))}

        <View
          style={{
            position: "absolute",
            bottom: 50,
            left: 50,
            right: 50,
            borderBottom: "1.5px solid #99B2CB",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#003E7E",
            fontSize: "9px",
          }}
          fixed
        >
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              color: "#000000",
              fontFamily: "Pretendard",
            }}
          >
            Ver: {version ? version : " "} Timestamp: {getTimeStamp()}
          </Text>

          <Text
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} of ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export default SecuritiesReport;
