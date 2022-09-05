import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/public/Home.js";
import SignUp from "./Pages/public/SignUp/SignUp.js";
import Login from "./Pages/public/Login.js";
import Organization from "./Pages/private/Organization";
import Profile from "./Pages/private/Profile.js";
import Recycle from "./Pages/private/Recycle.js";
import TopHeader from "./Components/Header/TopHeader";
import SideBar from "./Components/Header/SideBar";
import Loading from "./Components/Loading";
import Landing from "./Landing";

function App() {
  const [user, setUser] = useState("");

  //if there is user data, use sidebar, else use top header
  const isLoggedIn = !!sessionStorage.getItem("Logged In?");
  const header = user ? <SideBar setUser={setUser} /> : <TopHeader />;

  useEffect(() => {
    // auto-login
    fetch("/me/").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user);

  //Sends user to page if not logged in
  function restrict(component) {
    if (user) {
      return component;
    } else {
      return <Login setUser={setUser} user={user} />;
    }
  }

  return (
    <BrowserRouter>
      <div className={`App relative bg-gray h-full ${user ? "flex" : null}`}>
        {header}
        <div style={user ? { marginLeft: "200px" } : {}} className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setUser={setUser} user={user} />}
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/:organization" element={restrict(<Organization />)} />
            <Route path="/profile/:user" element={restrict(<Profile />)} />
            <Route
              path="/recycle"
              element={restrict(<Recycle user={user} />)}
            />
            <Route path="/leaders" element={restrict(<Landing />)} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
