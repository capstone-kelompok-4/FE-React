import React from 'react'
import Card from '../Card/Card'
import classes from "./Banner.module.css";

function Banner({data}) {
  return (
    <Card className={classes.card}>
      <div className={classes.bannerContent}>
        <div className={classes.bannerContentLeft}>
          <div className={classes.bannerInfoWrapper}>
            <h2 className={classes.bannerTitle}>WELCOME {data.username.toUpperCase()}!</h2>
            <p className={classes.bannerText}>Satisfy your curiosity with thousands of amazing courses. Upgrade your skills, deepen existing</p>
          </div>
          <button className="btn btn-primary align-self-start px-4">Get Started</button>
        </div>
        <div className={classes.bannerContentRight}>
          <img src="https://random.imagecdn.app/600/150" alt="bannerImage" style={{padding: "0 10px", marginTop: "-30px", marginBottom: "30px", borderRadius: "20px"}}/>
        </div>
      </div>
    </Card>
  )
}

export default Banner