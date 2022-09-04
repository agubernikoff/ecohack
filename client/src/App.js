import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/public/Home.js'
import SignUp from './Pages/public/SignUp/SignUp.js'
import Login from './Pages/public/Login.js'
import Organization from './Pages/private/Organization'
import Profile from './Pages/private/Profile.js'
import Recycle from './Pages/private/Recycle.js'
import TopHeader from './Components/Header/TopHeader'
import SideBar from './Components/Header/SideBar'
import Loading from './Components/Loading'


function App() {

  const [user, setUser] = useState([])



  //if there is user data, use sidebar, else use top header
  const isLoggedIn = user.length !== 0
  const header = isLoggedIn ? <SideBar /> : <TopHeader />

  //Sends user to page if not logged in
  function restrict(component) {
    if (isLoggedIn) {
      return component
    } else {
      return <Login />
    }
  }

  return (
    <BrowserRouter>
      <div className={`App relative bg-gray h-full ${isLoggedIn ? 'flex' : null}`}>
        {header}
        <div style={isLoggedIn ? {marginLeft: "200px"} : {}} className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/:organization" element={restrict(<Organization />)} />
          <Route path="/profile/:user" element={restrict(<Profile />)}/>
          <Route path="/recycle" element={restrict(<Recycle />)} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
