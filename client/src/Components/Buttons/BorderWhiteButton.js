import React from 'react'
import { Link } from "react-router-dom";

function BorderWhiteButton({to, text}) {
  return (
    <Link to={to} className="px-8 py-4 border-2 border-white text-white hover:border-dark-green uppercase font-bold duration-300 hover:shadow-2xl">
        {text}
    </Link>
  )
}

export default BorderWhiteButton