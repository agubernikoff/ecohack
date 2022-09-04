import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"


function Login({setUser, user}) {

  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

function login(e) {
  e.preventDefault()

  fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user))
      navigate(`/${user.organization_id}`)
    } else {
      r.json().then((errorData) => console.log(errorData.error))
    }
  })

  e.target.reset();
}

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
    <h1 className="text-4xl mb-4">Login</h1>
    <div style={{minWidth: "438px"}}className="p-14 bg-white shadow-lg rounded-3xl flex relative flex flex-col">
        <form onSubmit={(e) => login(e)} className="flex flex-col text-center">
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="border border-black" type="email" required/>
            <label htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password" className="border border-black" type="password" minlength="6" maxlength="40" required/>
            <button type="submit">Create Account</button>
        </form>
    </div>
  </div>
  )
}

export default Login