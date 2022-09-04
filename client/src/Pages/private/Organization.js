import React, {useEffect, useState} from 'react'
import Leaderboard from '../../Components/Leaderboard'
import Loading from '../../Components/Loading'

function Organization() {

const [orgData, setOrgData] = useState([])

useEffect(() => {
  const orgID = sessionStorage.getItem('Organization_ID')

  if(orgID) {
    fetch(`http://localhost:4000/organizations/${orgID}`)
    .then(resp => resp.json())
    .then(resp => setOrgData(resp))
  }

},[])

const {company_name, points, users} = orgData || {}

const communityGoal = 100
const communityGoalProogress = points ? Math.ceil((points / communityGoal) * 100) + "%" : 0

  return (
    orgData.length !== 0 ? (
    <div className="m-16">
      <h1 className="text-4xl mb-10">{company_name}</h1>
      <section className="px-14 py-7 bg-white shadow-lg rounded-3xl flex flex-col relative border">
          <h2 className="text-2xl mb-1">Community Goal Progress</h2>
          <h3 className="mb-6"><span className="font-bold">{points}</span> out of {communityGoal} items collected</h3>
          <div className="h-14 border rounded-full relative overflow-hidden">
            <div style={{width: communityGoalProogress}} className="bg-gradient-to-r from-dark-green to-light-green h-full relative flex items-center">
              <span className="absolute top-0 bottom-0 right-5 m-auto text-white font-bold h-min text-md">{communityGoalProogress}</span>
            </div>
          </div>
      </section>
      <Leaderboard name="Community Leaderboard" communityUsers={orgData.users}/>
    </div>
    ) : <Loading />
  )
}

export default Organization