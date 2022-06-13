import React from 'react'

function OnlineUser({name, avatar, timesOut, index}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className='d-flex align-items-center' style={{columnGap: "10px"}}>
        <img src={avatar} alt="profileImg" width="32px" height="32px" style={{borderRadius: "50%"}}/> 
        <p className='m-0'>{name}</p>
      </td>
      <td>{timesOut} minutes ago</td>
    </tr>
  )
}

export default OnlineUser