import { ColumnAlign, ColumnType, REPORT_TYPE, Report } from "../common/Report";
import { generateRandomDate } from "../utils/dateUtils";
import { generateRandomNumberWithCommas } from "../utils/numbeUtils";

export const reports: Report[] = [
  {
    type: REPORT_TYPE.TITLE_TABLE,
    title: "Operating Summary",
    columns: [
      {
        headerName: "",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Previous Close Date",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Current Close Date",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
    ],
    rows: [
      [
        "Operating Date",
        generateRandomDate(new Date("2024-01-01"), new Date("2024-01-31")),
        generateRandomDate(new Date("2024-12-01"), new Date("2024-12-31")),
      ],
    ],
  },
  {
    type: REPORT_TYPE.TITLE_TABLE,
    title: "Market Performance Overview",
    columns: [
      {
        headerName: "Metric",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Previous Quote",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Daily Change",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "YTD Change",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Percentage Difference",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
    ],
    rows: [...Array(20)].map((_, index) => [
      `Metric ${index}`,
      String((Math.random() * 1000.9 + 0.1).toFixed(3)),
      String((Math.random() * 100.99 + 0.11).toFixed(1)),
      String((Math.random() * 10000.99 + 0.11).toFixed(1)),
      String((Math.random() * 200 - 100).toFixed(2)),
    ]),
  },
  {
    type: REPORT_TYPE.TITLE_SUB_TABLES,
    title: "Net Asset Value Analysis",
    columns: [
      {
        headerName: "Category",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Net Asset -1",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Net Asset",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Dollar Change",
        align: ColumnAlign.RIGHT,
        type: ColumnType.TEXT,
      },
      {
        headerName: "Percentage Change",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
    ],
    subTables: [
      {
        title: "Fair Market Value (FMV)",
        rows: [...Array(5)].map((_, index) => [
          `FMV ${index}`,
          String((Math.random() * 1000.9 + 0.1).toFixed(3)),
          String((Math.random() * 100.99 + 0.11).toFixed(1)),
          String((Math.random() * 10000.99 + 0.11).toFixed(1)),
          String((Math.random() * 200 - 100).toFixed(2)),
        ]),
      },
      {
        title: "Gamma Exposure",
        rows: [...Array(5)].map((_, index) => [
          `Gamma ${index}`,
          String((Math.random() * 1000.9 + 0.1).toFixed(3)),
          String((Math.random() * 100.99 + 0.11).toFixed(1)),
          String((Math.random() * 10000.99 + 0.11).toFixed(1)),
          String((Math.random() * 200 - 100).toFixed(2)),
        ]),
      },
      {
        title: "Vega Exposure",
        rows: [...Array(5)].map((_, index) => [
          `Vega ${index}`,
          String((Math.random() * 1000.9 + 0.1).toFixed(3)),
          String((Math.random() * 100.99 + 0.11).toFixed(1)),
          String((Math.random() * 10000.99 + 0.11).toFixed(1)),
          String((Math.random() * 200 - 100).toFixed(2)),
        ]),
      },
    ],
    newPage: true,
  },
  {
    type: REPORT_TYPE.TITLE_TABLE,
    title: "Summary and Insights",
    columns: [
      {
        headerName: "Notes",
        align: ColumnAlign.LEFT,
        type: ColumnType.TEXT,
      },
    ],
    rows: [
      [
        `${generateRandomNumberWithCommas(
          100000,
          200000
        )} errors were identified due to system changes. Additional reviews are necessary.`,
      ],
      ["Trend analysis indicates outliers requiring further review."],
    ],
  },
];
