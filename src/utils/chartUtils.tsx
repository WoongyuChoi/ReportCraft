import { ChartType } from "chart.js";
import { Dataset } from "../common/Report";
import { generateRandomNumberWithCommas } from "./numberUtils";

export const generateRandomChartData = (
  chartType: ChartType,
  labelCount: number,
  title: string = "Random Dataset",
  label: string = "Label",
  minValue: number,
  maxValue: number,
  includeCommas: boolean = true
) => {
  const labels = Array.from(
    { length: labelCount },
    (_, index) => `${label} ${index + 1}`
  );
  const datasets: Dataset[] = [
    {
      label: title,
      data: labels.map(() =>
        includeCommas
          ? generateRandomNumberWithCommas(minValue, maxValue)
          : Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
      ) as number[],
      backgroundColor: labels.map(
        () =>
          `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")}`
      ),
    },
  ];

  return { chartType, labels, datasets };
};
