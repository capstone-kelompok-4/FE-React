import React from 'react'
import Card from '../Card/Card'
import classes from "./OnlineBoard.module.css";
import OnlineUser from './OnlineUser';

function OnlineBoard({data}) {
  return (
    <div className={classes.onlineBoardContainer}>
      <h3 className={classes.title}>Online Board</h3>
      <Card className={classes.card}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Profile</th>
              <th>Times Out</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => {
              return(
                <OnlineUser 
                key={user.user_id}
                index={i}
                username={user.username}
                profilePicture={user.profilePicture}
                timesOut={user.timesOut}
                />
              )
            })}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default OnlineBoard