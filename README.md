# ReportCraft

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=fff&labelColor=grey&color=62d9fb)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WoongyuChoi/ReportCraft/blob/main/LICENSE)
![Platform](https://img.shields.io/badge/platform-web-blue)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/WoongyuChoi/ReportCraft)

<figure align="center">
    <img src="https://github.com/user-attachments/assets/27798537-b7a5-4fbf-90dc-dc3ed199ea21" width="80%"/>
</figure>

## Overview

**ReportCraft** is a project for generating dynamic PDFs using React, TypeScript, and the `@react-pdf/renderer` library. It is designed to streamline the creation of professional and customizable reports.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed superset of JavaScript for safer code.
- **Vite**: Modern and fast build tool.
- **@react-pdf/renderer**: Powerful PDF generation for React applications.
- **BlobProvider Integration**: Enables on-the-fly PDF rendering and download functionality.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/WoongyuChoi/ReportCraft.git
    ```

2. Navigate into the project directory:
    ```bash
    cd ReportCraft
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. To build for production:
    ```bash
    npm run build
    ```

## Usage

The project demonstrates how to use the `@react-pdf/renderer` library to create dynamic reports with customizable layouts, headers, and tables.

Example usage:

```tsx
import { PDFViewer } from '@react-pdf/renderer';
import FinancialReport from './layout/FinancialReport';

export default function App() {
  return (
    <PDFViewer style={{ width: "100%", height: "90vh" }}>
      <FinancialReport />
    </PDFViewer>
  );
}
```

## License

This project is licensed under the MIT License.
