import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card'
import classes from "./Banner.module.css";

function Banner({data}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/course_overview")
  }
  return (
    <Card className={classes.card}>
      <div className={classes.bannerContent}>
        <div className={classes.bannerContentLeft}>
          <div className={classes.bannerInfoWrapper}>
            <h2 className={classes.bannerTitle}>WELCOME {data.username.toUpperCase()}!</h2>
            <p className={classes.bannerText}>Satisfy your curiosity with thousands of amazing courses. Upgrade your skills, deepen existing</p>
          </div>
          <button className={`btn align-self-start px-4 ${classes.btn}`} onClick={clickHandler}>Get Started</button>
        </div>
        <div className={classes.bannerContentRight}>
          <img src={require("../../Assets/Images/banner_img.png")} alt="bannerImage"/>
        </div>
      </div>
    </Card>
  )
}

export default Banner