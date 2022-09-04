import React from 'react'

function Leaderboard({name, communityUsers}) {

    if(communityUsers)  communityUsers.sort((a,b) => b.points - a.points)

    let largestNumber = communityUsers[0].points || {}

    function findPercentage(points) {
        return Math.ceil((points / largestNumber) * 100) + "%"
    }


  return (
    <section className="mt-16 px-14 py-7 bg-white shadow-lg rounded-3xl flex flex-col relative border">
    <h2 className="text-2xl mb-6">{name}</h2>
    {communityUsers ? communityUsers.map( user => (
        <div className="flex w-full my-3">
            <div className="w-14 font-bold text-4xl flex items-center">
                <span>{communityUsers.indexOf(user) + 1}</span>
            </div>
            <div className="flex flex-col w-full">
                <h3 className="font-bold capitalize mb-2">{user.first_name} {user.last_name}</h3>
                <div className="h-8 border rounded-full relative overflow-hidden w-full">
                    <div style={{width: findPercentage(user.points)}} className="bg-gradient-to-r from-dark-green to-light-green h-full relative flex items-center">
                        <span className="absolute top-0 bottom-0 right-5 m-auto text-white font-bold h-min text-sm">{user.points}</span>
                    </div>
                </div>
            </div>
        </div>
    )) : null}
</section>
  )
}

export default Leaderboard