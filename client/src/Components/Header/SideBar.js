import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GreenButton from "../Buttons/GreenButton";

function SideBar({ setUser }) {
  let navigate = useNavigate();

  function logout() {
    fetch("http://localhost:4000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });

    sessionStorage.removeItem("Logged In?");
    navigate("/");
  }

  return (
    <div
      style={{ width: "200px" }}
      className="h-screen fixed bg-black text-white"
    >
      <nav className="h-full px-6 py-8 relative">
        <ul className="flex flex-col">
          <li className="py-3 font-bold">
            <Link to="/leaders">Leaderboard</Link>
          </li>
          <li className="py-3 font-bold">
            <Link to="/:organization">Organization</Link>
          </li>
          <li className="py-3 font-bold">
            <Link to="/profile/:profile">Profile</Link>
          </li>
          <li className="py-3 font-bold">
            <button onClick={() => logout()}>Logout</button>
          </li>
          <li className="absolute bottom-10 right-0 left-0 m-auto w-min">
            <GreenButton to="/recycle" text="Recycle" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
