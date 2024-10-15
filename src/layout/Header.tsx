import React from "react";
import { Text, View } from "@react-pdf/renderer";
import headerStyles from "../assets/css/header-styles";

const Header = () => (
  <View style={headerStyles.header} fixed>
    <Text style={headerStyles.headerText}>Asset IRS DV01 Report</Text>
  </View>
);

export default Header;
