import { Text, View } from "@react-pdf/renderer";

const Header = ({ title, date }: { title?: string; date?: string }) => (
  <View
    wrap={false}
    style={{
      margin: "40px 60px 15px 60px",
      paddingBottom: "5x",
      borderBottom: "1.5px solid #99B2CB",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      color: "#003E7E",
      fontSize: "9px",
      fontFamily: "Pretendard",
    }}
    fixed
  >
    <Text>{title ? title : " "}</Text>
    {date && <Text>Process date : {date}</Text>}
  </View>
);

export default Header;
