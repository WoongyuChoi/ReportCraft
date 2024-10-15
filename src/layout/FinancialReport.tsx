import {
  Document,
  Image,
  Page,
  Text,
  View
} from "@react-pdf/renderer";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import styles from "../assets/css/financial-styles";
import { monthlyData } from "../assets/data/financial-data";
import "../assets/fonts";

// 도넛 차트 이미지 생성 함수
const generateChartImage = (): Promise<string | null> => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      resolve(null);
      return;
    }

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: monthlyData.map((data) => data.month),
        datasets: [
          {
            label: "Miles Traveled",
            data: monthlyData.map((data) => data.miles),
            backgroundColor: [
              "#FF0000",
              "#FFA500",
              "#FFFF00",
              "#008000",
              "#0000FF",
              "#4B0082",
              "#EE82EE",
              "#A52A2A",
              "#8A2BE2",
              "#5F9EA0",
              "#D2691E",
              "#FF1493",
            ],
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: { position: "top" },
        },
      },
    });

    setTimeout(() => {
      const imageURL = canvas.toDataURL("image/png");
      chart.destroy();
      resolve(imageURL);
    }, 100);
  });
};

// PDF 컴포넌트
const FinancialReport = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Promise로 처리하여 차트 이미지를 상태에 설정
    generateChartImage().then((imageUrl) => {
      if (imageUrl) setImageSrc(imageUrl);
    });
  }, []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Taxi Drives Dashboard</Text>
        <Text style={styles.tableHeader}>Monthly Totals</Text>

        {/* 월별 주행 거리 및 탑승 횟수 테이블 */}
        <View style={styles.table}>
          {/* 헤더 */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Month</Text>
            <Text style={styles.headerCell}>Miles Total</Text>
            <Text style={[styles.headerCell, styles.lastColumn]}>
              Rides Total
            </Text>
          </View>

          {/* 데이터 행 */}
          {monthlyData.map((data) => (
            <View key={data.month} style={styles.tableRow}>
              <Text style={styles.rowCell}>{data.month}</Text>
              <Text style={styles.rowCell}>{data.miles}</Text>
              <Text style={[styles.rowCell, styles.lastColumn]}>
                {data.rides}
              </Text>
            </View>
          ))}
        </View>       
      </Page>
      
      <Page>
         {/* 도넛 차트 이미지 */}
         {imageSrc && (
          <View style={styles.chartSection}>
            <Text>Miles Traveled By Category</Text>
            <Image src={imageSrc} style={styles.chartImage} />
          </View>
        )}
      </Page>
    </Document>
  );
};

export default FinancialReport;
