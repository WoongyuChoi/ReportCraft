import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { Chart } from "chart.js";
import React, { useEffect, useState } from "react";
import {
  ColumnHeader,
  Report,
  REPORT_TYPE,
  SubTable,
  TitleChartType,
} from "../common/Report";
import { getTimeStamp, getTodayDate } from "../utils/dateUtils";
import Header from "./Header";

const SecuritiesReport = ({
  title,
  subTitle,
  version,
  reports,
}: {
  title: string;
  subTitle?: string;
  version?: string;
  reports?: Report[];
}) => {
  const getReport = (report: Report) => {
    switch (report?.type) {
      case REPORT_TYPE.TITLE_TABLE:
        return (
          <TitleTable
            title={report?.title}
            columns={report?.columns}
            rows={report?.rows}
            newPage={report?.newPage}
          />
        );
      case REPORT_TYPE.TITLE_SUB_TABLES:
        return (
          <TitleSubTables
            title={report?.title}
            columns={report?.columns}
            subTables={report?.subTables}
            newPage={report?.newPage}
          />
        );
      case REPORT_TYPE.TITLE_CHART:
        return <TitleChart report={report} newPage={report?.newPage} />;
      default:
        break;
    }
  };

  const TitleChart = ({
    report,
    newPage,
  }: {
    report: TitleChartType;
    newPage?: boolean;
  }) => {
    const [chartUrl, setChartUrl] = useState<string | null>(null);

    const generateChartImage = async (): Promise<string | null> => {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 250;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          resolve(null);
          return;
        }

        const chartInstance = new Chart(ctx, {
          type: report?.chartType,
          data: {
            labels: report?.labels,
            datasets: report?.datasets,
          },
          options: {
            responsive: false,
            plugins: {
              legend: {
                display: true,
                position: "top",
                labels: {
                  font: {
                    family: "Pretendard",
                    size: 12,
                  },
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  font: {
                    family: "Pretendard",
                    size: 10,
                  },
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  font: {
                    family: "Pretendard",
                    size: 10,
                  },
                },
              },
            },
          },
        });

        setTimeout(() => {
          const imageURL = canvas?.toDataURL("image/png");
          chartInstance.destroy();
          resolve(imageURL);
        }, 100);
      });
    };

    useEffect(() => {
      (async () => {
        const imageUrl = await generateChartImage();
        if (imageUrl) {
          setChartUrl(imageUrl);
        }
      })();
    }, [report]);

    return (
      <>
        {chartUrl && (
          <View
            break={newPage}
            style={{
              margin: "0px 60px 20px 60px",
              padding: "30px",
            }}
          >
            <Image
              src={chartUrl}
              style={{
                width: "400px",
                height: "250px",
              }}
            />
          </View>
        )}
      </>
    );
  };

  const TitleTable = ({
    title,
    columns,
    rows,
    newPage = false,
  }: {
    title: string;
    columns: ColumnHeader[];
    rows: string[][];
    newPage?: boolean;
  }) => {
    return (
      <View
        break={newPage}
        style={{
          margin: "0px 60px 20px 60px",
        }}
      >
        <Text
          style={{
            fontSize: "16px",
            color: "#000000",
            fontWeight: 400,
            fontFamily: "Pretendard",
          }}
        >
          {title ? title : " "}
        </Text>

        <View
          style={{
            margin: "15px 0px 0px 0px",
            backgroundColor: "#F2F8F0",
            borderBottom: "1.5px solid #686F78",
            color: "#003E7E",
            fontSize: "11px",
            fontWeight: 600,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {columns?.map((item, index) => (
            <WrapText
              key={index}
              style={{
                width: "100%",
                padding: "7px 10px 7px 5px",
                textAlign: item?.align,
              }}
            >
              {item?.headerName ? item?.headerName : " "}
            </WrapText>
          ))}
        </View>
        {rows?.map((items, index) => (
          <View
            key={index}
            wrap={false}
            style={{
              color: "#000000",
              fontSize: "11px",
              borderBottom: "1px solid #9CA6B1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              fontWeight: 300,
            }}
          >
            {items?.map((item, index) => (
              <WrapText
                key={index}
                style={{
                  width: "100%",
                  padding: "4px 10px 4px 5px",
                  textAlign: columns?.at(index)?.align,
                }}
              >
                {item ? item : " "}
              </WrapText>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const TitleSubTables = ({
    title,
    columns,
    subTables,
    newPage = false,
  }: {
    title: string;
    columns: ColumnHeader[];
    subTables: SubTable[];
    newPage?: boolean;
  }) => {
    return (
      <View
        break={newPage}
        style={{
          margin: "0px 60px 20px 60px",
        }}
      >
        <Text
          style={{
            fontSize: "16px",
            color: "#000000",
            fontWeight: 400,
            fontFamily: "Pretendard",
          }}
        >
          {title ? title : " "}
        </Text>

        <View
          style={{
            margin: "15px 0px 0px 0px",
            backgroundColor: "#F2F8F0",
            borderBottom: "1.5px solid #686F78",
            color: "#003E7E",
            fontSize: "11px",
            fontWeight: 600,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {columns?.map((item, index) => (
            <WrapText
              key={index}
              style={{
                width: "100%",
                padding: "7px 10px 7px 5px",
                textAlign: item?.align,
              }}
            >
              {item?.headerName ? item?.headerName : " "}
            </WrapText>
          ))}
        </View>
        {subTables?.map((table: SubTable, index: number) => (
          <React.Fragment key={index}>
            {table?.title && (
              <View
                key={index}
                wrap={false}
                style={{
                  backgroundColor: "#EDF5FF",
                  color: "#565D65",
                  fontSize: "13px",
                  borderBottom: "1px solid #9CA6B1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "2px 0px",
                  fontWeight: 600,
                }}
              >
                <WrapText
                  key={index}
                  style={{
                    width: "100%",
                    padding: "4px 10px 4px 5px",
                  }}
                >
                  {table?.title}
                </WrapText>
              </View>
            )}

            {table?.rows?.map((items: string[], index: number) => (
              <View
                key={index}
                wrap={false}
                style={{
                  color: "#000000",
                  fontSize: "11px",
                  borderBottom: "1px solid #9CA6B1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "2px 0px",
                  fontWeight: 300,
                }}
              >
                {items?.map((item, index) => (
                  <WrapText
                    key={index}
                    style={{
                      width: "100%",
                      padding: "4px 10px 4px 5px",
                      textAlign: columns?.at(index)?.align,
                    }}
                  >
                    {item ? item : " "}
                  </WrapText>
                ))}
              </View>
            ))}
          </React.Fragment>
        ))}
      </View>
    );
  };

  const WrapText = ({ style, children }: any) => {
    return (
      <>
        <Text style={{ ...style, fontFamily: "Pretendard" }}>{children}</Text>
        <Text>{"\u00A0\u0009"}</Text>
      </>
    );
  };

  return (
    <Document title={title}>
      <Page size="A4" orientation="portrait" style={{ paddingBottom: "100px" }}>
        <Header title={"Review"} date={getTodayDate()} />

        {title && (
          <View
            style={{
              margin: subTitle ? "0px 60px" : "0px 60px 30px 60px",
              padding: "5px",
              color: "#ffffff",
              backgroundColor: "#79B465",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Pretendard",
              }}
            >
              {title}
            </Text>
          </View>
        )}

        {subTitle && (
          <View
            style={{
              margin: "0px 60px 30px 60px",
              padding: "7px 5px",
              color: "#000000",
              backgroundColor: "#C9AF94",
            }}
          >
            <Text
              style={{
                fontSize: "20px",
                fontWeight: 400,
                fontFamily: "Pretendard",
              }}
            >
              {subTitle}
            </Text>
          </View>
        )}

        {reports?.map((report: Report, index: number) => (
          <React.Fragment key={index}>{getReport(report)}</React.Fragment>
        ))}

        <View
          style={{
            position: "absolute",
            bottom: 50,
            left: 60,
            right: 60,
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
            style={{
              margin: "0px 5px",
            }}
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
