import React from 'react'
import { Link, useLocation } from "react-router-dom";
import WhiteLogo from '../../Assets/logo-white.png'

function TopHeader() {

let location = useLocation()
let isHome =  location.pathname === '/' ? true : false

  return (
    <div className="w-full flex justify-between absolute px-8 py-6">
        <Link to="/"><img className="w-60 absolute top-0 left-0" src={isHome ? WhiteLogo : null} alt="black white"/></Link>
        <nav className={isHome ? 'text-white' : 'text-black'}>
            <ul className="flex flex-row font-bold">
                <ul className="px-2">
                    <Link to="/about">About</Link>
                </ul>
                <ul className="px-2">
                    <Link to="/sign-up">Sign Up</Link>
                </ul>
                <ul className="px-2">
                    <Link to="/login">Login</Link>
                </ul>
            </ul>
        </nav>
    </div>
  )
}

export default TopHeader