import React from 'react'
import Background from '../Assets/home-background.jpg'
import LoginButton from '../Components/Buttons/SolidWhiteButton'
import SignUp from '../Components/Buttons/BorderWhiteButton'

function Home() {
  return (
    <div style={{backgroundImage: `url("${Background}")`}} className="w-full h-screen flex items-center justify-center">
      <section className="text-white text-center max-w-3xl bg-black/90 p-10 pb-16 rounded-3xl">
        <h1 className="text-4xl pb-4  leading-normal">Change the world and have fun while doing it!</h1>
        <p className="text-xl leading-relaxed">Recycle Quest is an app that let's your organization compete side-by-side while creating positive change. Score points by recycling.</p>
        <ul className="flex justify-center mt-12">
          <li className="px-3">
             <LoginButton to="/login" text="login"/> 
          </li>
          <li className="px-3">
            <SignUp to="/login" text="Sign Up"/> 
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home