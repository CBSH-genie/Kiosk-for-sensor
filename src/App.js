import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import Certify from "./pages/Certify";
import Numpad from "./pages/Numpad";
import Finish from "./pages/Finish";
import Wait from "./pages/Wait";
import "./App.css";
import "@picocss/pico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Wait />} />
        <Route path="Main" element={<Main />} />
        <Route path="Certify" element={<Certify />} />
        <Route path="Numpad" element={<Numpad />} />
        <Route path="Finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<Kiosk />, document.getElementById("root"));

export default App;
