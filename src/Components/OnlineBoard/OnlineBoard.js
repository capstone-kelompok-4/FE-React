import React from 'react'
import Card from '../Card/Card'
import classes from "./OnlineBoard.module.css";
import OnlineUser from './OnlineUser';

function OnlineBoard({data, title}) {
  return (
    <div className={classes.onlineBoardContainer}>
      <h3 className={classes.title}>{title}</h3>
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
                key={user.id}
                index={i}
                name={user.name}
                avatar={user.avatar}
                timesOut={user.times_out}
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