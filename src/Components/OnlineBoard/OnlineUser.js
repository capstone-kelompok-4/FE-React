import React from 'react'

function OnlineUser({username, profilePicture, timesOut, index}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className='d-flex align-items-center' style={{columnGap: "10px"}}>
        <img src={profilePicture} alt="profileImg" width="32px" height="32px"/> 
        <p className='m-0'>{username}</p>
      </td>
      <td>{timesOut}</td>
    </tr>
  )
}

export default OnlineUser