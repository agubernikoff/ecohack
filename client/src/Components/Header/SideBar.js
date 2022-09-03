import React from 'react'
import { Link } from "react-router-dom";
import GreenButton from '../Buttons/GreenButton';


function SideBar() {
  return (
    <div style={{width: "200px"}} className="h-screen fixed bg-black text-white">
        <nav className="h-full px-6 py-8 relative">
            <ul className="flex flex-col">
                <li className="py-3 font-bold">
                    <Link to="/:organization">Organization</Link>
                </li>
                <li className="py-3 font-bold">
                    <Link to="/profile/:profile">Profile</Link>
                </li>
                <li className="py-3 font-bold">
                    <button>Logout</button>
                </li>
                <li className="absolute bottom-10 right-0 left-0 m-auto w-min">
                    <GreenButton to="/donate" text="Donate" />
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideBar