import React from 'react'
import UserIcon from '../../Assets/user.js'
import OrganizationIcon from '../../Assets/organization.js'


function SignUpPaths({setSignupType}) {
  return (
    <>
        <button onClick={() => setSignupType("user")} className="bg-light-green p-5 w-48 flex flex-col justify-center items-center text-center hover:bg-dark-green hover:scale-90 duration-300 mr-7">
            <UserIcon/>
            <h3 className="text-lg mt-4 font-bold text-white">User Joining Organization</h3>
        </button>
        <button onClick={() => setSignupType("organization")} className="bg-light-green p-5 w-48 flex flex-col justify-center items-center text-center hover:bg-dark-green hover:scale-90 duration-300 ml-7">
            <OrganizationIcon/>
            <h3 className="text-lg mt-4 font-bold text-white">Admin Creating Organization</h3>
        </button>
    </>
  )
}

export default SignUpPaths