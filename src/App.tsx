import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from ".";
import "./App.css";
import ReportProvider from "./provider/ReportProvider";

function App() {
  return (
    <ReportProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ReportProvider>
  );
}

export default App;
