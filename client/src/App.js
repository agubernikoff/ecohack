import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import Login from './Pages/Login.js'
import SignUp from './Pages/SignUp.js'
import TopHeader from './Components/Header/TopHeader'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
