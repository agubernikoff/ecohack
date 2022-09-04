import React from 'react'

function Organization() {

const itemsCollected = 546
const communityGoal = 1000
const communityGoalProogress = Math.ceil((itemsCollected / communityGoal) * 100) + "%"

  return (
    <div className="m-16">
      <h1 className="text-4xl mb-10">Group Name</h1>
      <section className="px-14 py-7 bg-white shadow-lg rounded-3xl flex flex-col relative border">
          <h2 className="text-2xl mb-1">Community Goal Progress</h2>
          <h3 className="mb-6"><span className="font-bold">{itemsCollected}</span> out of {communityGoal} items collected</h3>
          <div className="h-14 border rounded-full relative overflow-hidden">
            <div style={{width: communityGoalProogress}} className="bg-light-green h-full relative flex items-center">
              <span className="absolute top-0 bottom-0 right-5 m-auto text-white font-bold h-min text-md">{communityGoalProogress}</span>
            </div>
          </div>
      </section>
      <section className="mt-16 px-14 py-7 bg-white shadow-lg rounded-3xl flex flex-col relative border">
          <h2 className="text-2xl mb-6">Community Leaderboard</h2>
          <div className="h-14 border rounded-full relative overflow-hidden">
            <div style={{width: communityGoalProogress}} className="bg-light-green h-full relative flex items-center">
              <span className="absolute top-0 bottom-0 right-5 m-auto text-white font-bold h-min text-md">{communityGoalProogress}</span>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Organization