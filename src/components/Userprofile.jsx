import React from 'react'

export const Userprofile = ({user}) => {
  return (
    <div className= 'border p-4 rounded shadow mb-4'>
        <h2 className= 'text-xl font-semibold'> {user.name}</h2>
        <p>{user.bio}</p>
        <p>followers: {user.followers}</p>

    </div>
  )
}
