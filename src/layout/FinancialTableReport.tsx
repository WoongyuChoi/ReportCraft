import { Document, Page, Text, View } from "@react-pdf/renderer";
import styles from "../assets/css/financialTable-styles";
import { tableData } from "../assets/data/financialTable-data";
import "../assets/fonts";

// PDF 컴포넌트
const FinancialTableReport = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Asset IRS DV01 Report</Text>

        {/* 테이블 */}
        <Text style={styles.tableTitle}>Assert IRS DV01 (Units: 1 KRW)</Text>
        <View style={styles.table}>
          {/* 헤더 */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Term</Text>
            <Text style={styles.headerCell}>Position</Text>
            <Text style={styles.headerCell}>Notional</Text>
            <Text style={styles.headerCell}>Maturity</Text>
            <Text style={styles.headerCell}>Fixed Coupon(%)</Text>
            <Text style={styles.headerCell}>Pay/Recv</Text>
            <Text style={styles.headerCell}>DV01(t-1)</Text>
            <Text style={styles.headerCell}>DV01 Convexity(t-1)</Text>
            <Text style={styles.headerCell}>Diff.DV01</Text>
            <Text style={styles.headerCell}>Diff.Convexity</Text>
            <Text style={styles.headerCell}>Diff.DV01(%)</Text>
            <Text style={styles.headerCell}>Diff.Convexity(%)</Text>
            <Text style={styles.headerCell}>Currency</Text>
          </View>

          {/* 데이터 행 */}
          {tableData.map((data, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.rowCell}>{data.term}</Text>
              <Text style={styles.rowCell}>{data.position}</Text>
              <Text style={styles.rowCell}>{data.notional}</Text>
              <Text style={styles.rowCell}>{data.maturity}</Text>
              <Text style={styles.rowCell}>{data.fixedCoupon}</Text>
              <Text style={styles.rowCell}>{data.payRecv}</Text>
              <Text style={styles.rowCell}>{data.dV01T1}</Text>
              <Text style={styles.rowCell}>{data.dV01ConvexityT1}</Text>
              <Text style={styles.rowCell}>{data.diffDv01}</Text>
              <Text style={styles.rowCell}>{data.diffConvexity}</Text>
              <Text style={styles.rowCell}>{data.diffDv01Per}</Text>
              <Text style={styles.rowCell}>{data.diffConvexityPer}</Text>
              <Text style={styles.rowCell}>{data.currency}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default FinancialTableReport;
