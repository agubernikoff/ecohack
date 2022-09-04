import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"


function Login({setUser, user}) {

  console.log(user)

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
      r.json().then((user) => {
      setUser(user)
      sessionStorage.setItem('Logged In?', true)
      navigate(`/${user.organization_id}`)
    })
    } else {
      r.json().then((errorData) => console.log(errorData.error))
    }
  })

  e.target.reset();
}

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
    <h1 className="text-4xl mb-10">Sign In</h1>
    <div style={{minWidth: "438px"}}className="p-14 bg-white shadow-lg rounded-3xl flex relative flex flex-col">
        <form onSubmit={(e) => login(e)} className="flex flex-col text-center">
            <label className="font-bold mb-2 text-dark-green" htmlFor="email">Email:</label>
            <input  onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="mb-3 border border-black text-center" type="email" required/>
            <label className="font-bold mb-2 text-dark-green" htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password" className="mb-3 border border-black text-center" type="password" minlength="6" maxlength="40" required/>
            <button className="px-8 py-4 bg-light-green mt-6 text-white text-xl font-bold hover:bg-dark-green duration-300" type="submit">Login</button>
        </form>
    </div>
  </div>
  )
}

export default Login