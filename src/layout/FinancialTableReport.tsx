import { Document, Page, Text, View } from "@react-pdf/renderer";
import styles from "../assets/css/financialTable-styles";
import {
  tableData,
  tableHeaders,
} from "../assets/data/financialTable-data";
import { autoLineBreak } from "../utils/autoLineBreak"; 
import "../assets/fonts";

// PDF 컴포넌트
const FinancialTableReport = () => {
  const numColumns = Object.keys(tableData[0]).length; // 열의 개수 계산

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Asset IRS DV01 Report</Text>

        {/* 테이블 */}
        <Text style={styles.tableTitle}>Assert IRS DV01 (Units: 1 KRW)</Text>

        {/* 테이블 헤더 */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.term, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.position, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.notional, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.maturity, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.fixedCoupon, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.payRecv, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.dV01T1, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.dV01ConvexityT1, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.diffDv01, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.diffConvexity, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.diffDv01Per, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.diffConvexityPer, numColumns)}</Text>
          <Text style={styles.headerCell}>{autoLineBreak(tableHeaders.currency, numColumns)}</Text>
        </View>

        {/* 데이터 행 */}
        {tableData.map((data, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.rowCell}>{autoLineBreak(data.term, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.position, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.notional, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.maturity, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.fixedCoupon, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.payRecv, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.dV01T1, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.dV01ConvexityT1, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.diffDv01, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.diffConvexity, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.diffDv01Per, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.diffConvexityPer, numColumns)}</Text>
            <Text style={styles.rowCell}>{autoLineBreak(data.currency, numColumns)}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default FinancialTableReport;
