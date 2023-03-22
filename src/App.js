import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from "react-dom";
import Main from "./pages/Main";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<Kiosk />, document.getElementById("root"));


export default App;
