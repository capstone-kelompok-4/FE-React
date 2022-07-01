import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./SideNav.module.css"
// Assets
import HomeIcon from "../../Assets/Icons/home.svg";
import BookIcon from "../../Assets/Icons/book.svg";
import ForumIcon from "../../Assets/Icons/forum.svg";
import UserIcon from "../../Assets/Icons/participant_white.svg";

function SideNav() {
  const sidebarItems = [
    {
      id: "home",
      path: '/',
      icon: HomeIcon
    },
    {
      id: 'course_overview',
      path: '/course_overview',
      icon: BookIcon,
    },
    {
      id: 'forum',
      path: '/forum',
      icon: ForumIcon
    },
    {
      id: 'account',
      path: '/account/edit_profile',
      icon: UserIcon
    },
  ]

  return (
    <nav className={`${classes.sideNav}`}>
      <ul className={classes.sideNavItems}>
        {
          sidebarItems.map((item) => {
            return(
              <li className={classes.sideNavItem} key={item.id}>
                <Link to={item.path} >
                  <img src={item.icon} alt="sideNavLogo" width="32px" height="32px"/>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default SideNav