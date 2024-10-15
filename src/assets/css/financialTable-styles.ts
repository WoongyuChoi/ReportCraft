import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: "left",
    color: "#000080",
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tableTitle: {
    flexDirection: "row",
    fontSize: 24,
    marginBottom: 24,
    textAlign: "left",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2", // 헤더 배경 회색
    borderBottomColor: "#848484", // 헤더 하단 굵은 회색 선
    borderBottomWidth: 5,
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    fontWeight: "heavy",
    color: "#000080", // 헤더 텍스트 파란색
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,    
    borderBottomColor: "#c2c2c2",
    borderBottomWidth: 2,
  },
  rowCell: {
    flex: 1,
    fontSize: 14,
    textAlign: "left",
    paddingHorizontal: 10,
  },
});

export default styles;
