import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from ".";
import "./App.css";
import ChartProvider from "./provider/ChartProvider";
import ReportProvider from "./provider/ReportProvider";

function App() {
  return (
    <ChartProvider>
      <ReportProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ReportProvider>
    </ChartProvider>
  );
}

export default App;
