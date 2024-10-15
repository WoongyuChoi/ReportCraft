import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontFamily: "SpoqaHanSans",
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "left",
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  rowCell: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  lastColumn: {
    borderRightWidth: 0, // 마지막 열의 오른쪽 테두리 제거
  },
  chartSection: {
    marginTop: 20,
    alignItems: "center",
  },
  chartImage: {
    width: 200,
    height: 200,
  },
});

export default styles;
