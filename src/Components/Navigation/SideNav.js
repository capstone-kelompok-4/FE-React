import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./SideNav.module.css"
// Assets
import HomeIcon from "../../Assets/Icons/home.svg";
import BookIcon from "../../Assets/Icons/book.svg";
import ForumIcon from "../../Assets/Icons/forum.svg";
import UserIcon from "../../Assets/Icons/participant_white.svg";

function SideNav() {
  return (
    <nav className={`${classes.sideNav}`}>
      <ul className={classes.sideNavItems}>
        <li className={classes.sideNavItem}>
          <Link to="/">
            <img src={HomeIcon} alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
        <li className={classes.sideNavItem}>
          <Link to="/course_overview">
            <img src={BookIcon} alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
        <li className={classes.sideNavItem}>
          <Link to="/forum">
            <img src={ForumIcon} alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
        <li className={classes.sideNavItem}>
          <Link to="/account/edit_profile">
            <img src={UserIcon} alt="sideNavLogo" width="32px" height="32px"/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav