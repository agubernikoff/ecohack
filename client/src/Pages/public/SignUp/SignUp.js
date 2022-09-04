import React, {useState} from 'react'
import SignUpPaths from './SignUpPaths'
import OrganizationForm from './OrganizationForm'
import UserForm from './UserForm'


function Login() {

const [signupType, setSignupType] = useState("")

function displayLoginComponent() {
  if (signupType === "organization") return <OrganizationForm/>
  if (signupType === "user") return <UserForm/>
  return <SignUpPaths setSignupType={setSignupType}/>
}

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl mb-4">Choose a Path</h1>
      <p className="text-2xl font-bold mb-10">I am a...</p>
      <div style={{minWidth: "438px"}}className="p-14 bg-white shadow-lg rounded-3xl flex relative pt-8">
        {signupType !== "" ? (
          <button onClick={() => setSignupType("")}className="absolute left-5 top-5 text-white p-3 bg-light-green rounded-full hover:scale-90 hover:bg-dark-green duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
        ) : null}
        {displayLoginComponent()}
      </div>
    </div>
  )
}

export default Login