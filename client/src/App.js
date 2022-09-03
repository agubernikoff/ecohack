import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import TopHeader from './Components/Header/TopHeader'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
