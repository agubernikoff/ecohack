import React, {useState} from 'react'

function OrganizationForm() {

  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function createUser(e) {
    e.preventDefault()

    fetch('http://localhost:4000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_name: organization,
        points: 0
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((org) =>  renderUser(org.id))
      } else {
        r.json().then((errorData) => console.log(errorData.error))
      }
    })

    function renderUser(orgID) {

      fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          user: {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            score: 0,
            organization_id: orgID
        } })
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) =>  console.log(user))
        } else {
          r.json().then((errorData) => console.log(errorData.error))
        }
      })
  

    }
  
    e.target.reset()
  
  }


  return (
    <div className="flex flex-col px-10 justify-center text-center w-full">
        <h2 className="text-2xl mb-10">User</h2>
        <form onSubmit={(e) => createUser(e)} className="flex flex-col text-center">
            <label htmlFor="organization">Organization Name:</label>
            <input onChange={(e) => setOrganization(e.target.value)} value={organization} id="organization" className="border border-black" type="text" required />
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="border border-black" type="email" required/>
            <label htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password" className="border border-black" type="password" minlength="6" maxlength="40" required/>
            <label htmlFor="firstName">Your First Name:</label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} id="firstName" className="border border-black" type="text" required/>
            <label htmlFor="lastName">Your Last Name:</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastName" className="border border-black" type="text" required/>
            <button type="submit">Create Account</button>
        </form>
    </div>
  )
}

export default OrganizationForm