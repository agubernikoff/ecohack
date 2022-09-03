import React from 'react'
import { Link } from "react-router-dom";


function GreenButton({to, text}) {
  return (
    <Link to={to} className="border-2 border-light-green px-8 py-4 bg-light-green text-white hover:text-white hover:bg-dark-green hover:border-dark-green uppercase font-bold duration-300 hover:shadow-2xl">
        {text}
    </Link>
  )
}

export default GreenButton