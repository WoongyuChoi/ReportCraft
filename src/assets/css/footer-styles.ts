import { StyleSheet } from "@react-pdf/renderer";

const footerStyles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between", // 양쪽 끝으로 배치
    padding: 10,
    position: "absolute", // 고정된 위치
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 10,
  },
  centerText: {
    flex: 1,
    textAlign: "center", // 가운데 정렬
    marginRight: 30, // 오른쪽 여백 추가
  },
  rightText: {
    flex: 1,
    textAlign: "right",
  },
});

export default footerStyles;
