import React, { ReactNode } from "react";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const ChartProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default ChartProvider;
