import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css";

function Navbar() {
  const isLogin = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" style={{position: "sticky", top: "0", zIndex: "100"}}>
        <div className="container-fluid px-3">
          <div className={classes.left}>
            <Link to="/">
              <img src="https://random.imagecdn.app/700/150" alt="navbarLogo" width="44px" height="44px"/>
            </Link>
          </div>
          {isLogin && (
            <div className={classes.right}>
              <img src="https://random.imagecdn.app/800/150" alt="notificationIcon" width="32px" height="32px"/>
              <img src="https://random.imagecdn.app/800/150" alt="notificationIcon" width="32px" height="32px"/>
              <button className="btn btn-outline-secondary text-dark border-dark bg-light fw-bold" type="submit">Arya</button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar