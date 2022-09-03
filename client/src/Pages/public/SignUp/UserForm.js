import React from 'react'

function UserForm() {
  return (
    <div className="flex flex-col px-10 justify-center text-center w-full">
        <h2 className="text-2xl mb-10">User</h2>
        <form className="flex flex-col text-center">
            <label>Organization Name:</label>
            <select className="border border-black" type="text">
                <option>Team 1</option>
            </select>
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

export default UserForm