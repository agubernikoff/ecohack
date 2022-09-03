import React from 'react'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
    <h1 className="text-4xl mb-4">Login</h1>
    <div style={{minWidth: "438px"}}className="p-14 bg-white shadow-lg rounded-3xl flex relative flex flex-col">
        <form className="flex flex-col text-center">
            <label>Username:</label>
            <input className="border border-black" type="text" />
            <label>Password:</label>
            <input className="border border-black" type="password" />
            <button type="submit">Create Account</button>
        </form>
    </div>
  </div>
  )
}

export default Login