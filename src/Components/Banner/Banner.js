import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from "./Banner.module.css";

function Banner({data}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/course_overview")
  }
  return (
    <div className={classes.card}>
      <div className={classes.bannerContent}>
        <div className={classes.bannerInfoWrapper}>
          <h2 className={classes.bannerTitle}>Welcome <span style={{color: "#FF6C00"}}>{data?.name}</span> <span style={{fontSize: "50px"}}>&#127881;</span></h2>
          <p className={classes.bannerText}>Satisfy your curiosity with thousands of amazing courses. Improve your skills by taking part in a series of video recording training</p>
        </div>
        <button className={`btn align-self-start ${classes.btn}`} onClick={clickHandler}>Get's Start</button>
      </div>
    </div>
  )
}

export default Banner