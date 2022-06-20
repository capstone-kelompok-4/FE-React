import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import classes from "./SideNav.module.css"
import { useDispatch } from 'react-redux';
// Assets
import HomeIcon from "../../Assets/Icons/home.svg";
import BookIcon from "../../Assets/Icons/book.svg";
import ForumIcon from "../../Assets/Icons/forum.svg";
import UserIcon from "../../Assets/Icons/participant_white.svg";
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import { logout } from '../../Store/userSlice';

function SideNav() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
    <Navigate to="/login" />
  }
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
          <button onClick={logoutHandler}>
            <img src={UserIcon} alt="sideNavLogo" width="32px" height="32px"/>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav