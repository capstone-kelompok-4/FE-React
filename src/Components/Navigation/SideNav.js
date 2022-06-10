import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./SideNav.module.css"

function SideNav() {
  return (
    <nav className={`${classes.sideNav}`}>
      <ul className={classes.sideNavItems}>
        <li className={classes.sideNavItem}>
          <Link to="/">
            <img src="https://random.imagecdn.app/200/150" alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
        <li className={classes.sideNavItem}>
          <Link to="/course_overview">
            <img src="https://random.imagecdn.app/200/150" alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
        <li className={classes.sideNavItem}>
          <Link to="/">
            <img src="https://random.imagecdn.app/200/150" alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav