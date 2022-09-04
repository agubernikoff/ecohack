import React, {useState, useEffect} from 'react'

function UserForm() {

  const [organizations, setOrganizations] = useState("")
  const [organizationID, setOrganizationID] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const userData =  { 
    user: {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      score: 0,
      organization_id: organizationID
    } 
  }

  useEffect(() => {
    fetch('http://localhost:4000/organizations')
    .then(data => data.json())
    .then(data => setOrganizations(data))
  },[])

  function createUser(e) {
    e.preventDefault()
  
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  
    e.target.reset()
  
  }

  return (
    <div className="flex flex-col px-10 justify-center text-center w-full">
        <h2 className="text-2xl mb-10 font-bold text-dark-green">User</h2>
        <form onSubmit={(e) => createUser(e, userData)} className="flex flex-col text-center">
            <label className="font-bold mb-2 text-dark-green" htmlFor="organization">Organization Name:</label>
            <select onChange={(e) => setOrganizationID(e.target.value)} id="organization" className="mb-3 border border-black text-center" type="text" required>
                <option value="" disabled selected>Select your option</option>
                { organizations ? organizations.map(organization => {
                  return <option key={organization.id} value={organization.id}>{organization.company_name}</option>
                }) : null }
            </select>
            <label className="font-bold mb-2 text-dark-green" htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="mb-3 border border-black text-center" type="email" required/>
            <label className="font-bold mb-2 text-dark-green" htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password" className="mb-3 border border-black text-center" type="password" minlength="6" maxlength="40" required/>
            <label className="font-bold mb-2 text-dark-green" htmlFor="firstName">Your First Name:</label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} id="firstName" className="mb-3 border border-black text-center" type="text" required/>
            <label className="font-bold mb-2 text-dark-green" htmlFor="lastName">Your Last Name:</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastName" className="mb-3 border border-black text-center" type="text" required/>
            <button className="px-8 py-4 bg-light-green mt-6 text-white text-xl font-bold hover:bg-dark-green duration-300" type="submit">Create Account</button>
        </form>
    </div>
  )
}

export default UserForm