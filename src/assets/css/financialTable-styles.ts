import { Font, StyleSheet } from "@react-pdf/renderer";

// 하이픈 비활성화 설정 (자동 줄바꿈 시 하이픈 생략)
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontFamily: "Pretendard",
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
    borderBottomWidth: 4,
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontSize: 14,
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
    fontSize: 12,
    textAlign: "left",
    paddingHorizontal: 10,
  },
});

export default styles;
