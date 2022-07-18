import { Skeleton } from '@mui/material';
import React from 'react'
import Card from '../Card/Card'
import classes from "./OnlineBoard.module.css";
import OnlineUser from './OnlineUser';

function OnlineBoard({data, title, loading}) {
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
            { loading ? (
              [1,2,3,4,5].map((e) => {
                return(
                  <tr>
                    <td><Skeleton variant='text' width={20} height={20} animation="wave"/></td>
                    <td className='d-flex align-items-center' style={{columnGap: "10px"}}>
                      <Skeleton variant="circular" width={60} height={40} animation="wave"/>
                      <Skeleton variant="text" width="100%" height="20" animation="wave" />
                    </td>
                    <td><Skeleton variant="text" width="50%" height="20" animation="wave" /></td>
                  </tr>
                )
              })
            ) : (
              data.map((user, i) => {
                return(
                  <OnlineUser 
                  key={user.id}
                  index={i}
                  name={user.name}
                  avatar={user.avatar}
                  timesOut={user.times_out}
                  />
                )
              })
            )
            }
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default OnlineBoard