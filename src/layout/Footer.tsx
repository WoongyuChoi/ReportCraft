import React from "react";
import { Text, View } from "@react-pdf/renderer";
import footerStyles from "../assets/css/footer-styles"; // 풋터 스타일 가져오기

const Footer = ({
  pageNumber,
  totalPages,
}: {
  pageNumber: number;
  totalPages: number;
}) => {
  const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];

  return (
    <View style={footerStyles.footer} fixed>
      <Text style={[footerStyles.footerText, footerStyles.centerText]}>
        Ver: 2.18.1
      </Text>
      <Text style={[footerStyles.footerText, footerStyles.centerText]}>
        Timestamp: {timestamp}
      </Text>
      <Text style={[footerStyles.footerText, footerStyles.rightText]}>
        {`Page ${pageNumber} of ${totalPages}`}
      </Text>
    </View>
  );
};

export default Footer;
