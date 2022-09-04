export function createUser(e, userData) {
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

export default createUser
  