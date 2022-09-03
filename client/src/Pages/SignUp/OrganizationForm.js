import React from 'react'

function OrganizationForm() {
  return (
    <div className="flex flex-col px-10 justify-center text-center w-full">
        <h2 className="text-2xl mb-10">Organization</h2>
        <form className="flex flex-col text-center">
            <label>Organization Name:</label>
            <input className="border border-black" type="text" />
            <label>Username:</label>
            <input className="border border-black" type="text" />
            <label>Password:</label>
            <input className="border border-black" type="password" />
            <label>Your First Name:</label>
            <input className="border border-black" type="text"/>
            <label>Your First Name:</label>
            <input className="border border-black" type="text"/>
            <button type="submit">Create Account</button>
        </form>
    </div>
  )
}

export default OrganizationForm