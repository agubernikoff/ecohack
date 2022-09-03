import React from 'react'
import Background from '../Assets/home-background.jpg'

function Home() {
  return (
    <div style={{backgroundImage: `url("${Background}")`}} className="w-full h-screen">Home</div>
  )
}

export default Home