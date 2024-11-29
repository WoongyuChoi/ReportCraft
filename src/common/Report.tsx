import { ChartType } from "chart.js";

export interface ColumnHeader {
  type: ColumnType;
  headerName: string;
  align: ColumnAlign;
}

export enum ColumnAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum ColumnType {
  TEXT,
  NUMBER,
  DATE,
  PERCENT,
}

export enum REPORT_TYPE {
  TITLE_TABLE = "TITLE_TABLE",
  TITLE_SUB_TABLES = "TITLE_SUB_TABLES",
  TITLE_CHART = "TITLE_CHART",
}

export interface TitleTableType {
  type: typeof REPORT_TYPE.TITLE_TABLE;
  title: string;
  columns: ColumnHeader[];
  rows: string[][];
  newPage?: boolean;
}

export interface TitleSubTableType {
  type: typeof REPORT_TYPE.TITLE_SUB_TABLES;
  title: string;
  columns: ColumnHeader[];
  subTables: SubTable[];
  newPage?: boolean;
}

export interface SubTable {
  title: string;
  rows: string[][];
}

export interface TitleChartType {
  type: typeof REPORT_TYPE.TITLE_CHART;
  chartType: ChartType;
  labels: string[];
  datasets: Dataset[];
  newPage?: boolean;
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
}

export type Report = TitleTableType | TitleSubTableType | TitleChartType;
