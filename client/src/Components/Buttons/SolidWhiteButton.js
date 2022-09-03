import React from 'react'
import { Link } from "react-router-dom";


function SolidWhiteButton({to, text}) {
  return (
    <Link to={to} className="border-2 border-white px-8 py-4 bg-white text-light-green hover:text-white hover:bg-dark-green hover:border-dark-green uppercase font-bold duration-300 hover:shadow-2xl">
        {text}
    </Link>
  )
}

export default SolidWhiteButton