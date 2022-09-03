import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import SignUp from './Pages/SignUp/SignUp.js'
import Login from './Pages/Login.js'
import TopHeader from './Components/Header/TopHeader'

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gray h-full">
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
