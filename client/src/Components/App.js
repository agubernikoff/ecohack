import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1 className="underline">Test Route</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
