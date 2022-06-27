import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import SidebarSection from '../../Components/Navigation/SidebarSection'
import SidebarIcon from "../../Assets/Icons/sidebar.svg";
import EclipseIcon from "../../Assets/Icons/eclipse.svg";
import CloseIcon from "../../Assets/Icons/close.svg";
import classes from "./DataReport.module.css";

function DataReport() {
  const { id } = useParams();
  const [active, setActive] = useState("Overview Report");
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  const openedSidebar = showSidebar ? classes.opened : classes.closed;

  const buttons = [
    {
      name: "Overview Report",
      path: "overview_report",
    },
    {
      name: "User Report",
      path: "user_report",
    }
  ];

  return (
    <>
      <SidebarSection isOpen={showSidebar} id={id}/>
      <div style={{padding: "20px 40px"}}>
        <div className={`${classes.imageWrapper} ${openedSidebar}`} style={{display: "inline-block", cursor: "pointer", zIndex: "2", position: "fixed", top: "70"}}  onClick={handleSidebarShow}>
          {showSidebar ? (
            <img src={CloseIcon} alt="icon" width="40px" height="40px"/>
            ):(
            <>
              <img src={EclipseIcon} alt="icon" width="40px" height="40px" style={{backgroundColor: "#0D2341", borderRadius: "50%"}}/>
              <img src={SidebarIcon} alt="icon" width="18px" height="18px" className={classes.innerImage}/>
            </>
            )
          }
        </div>
      </div>
      <div className="row mb-5 m-auto" style={{width: "85%"}}>
        <h2>Data Report</h2>
        <h4 className='mt-2'>UI/UX Research & Design</h4>
        <div className={classes.btnWrapper}>
          {
            buttons.map((button) => {
              return(
                <button className={classes.btn} style={{border: active === button.name ? '1px solid #FF6C00': null}} name="overview_report" onClick={(e) => setActive(e.target.innerText)}>
                  <Link to={button.path} style={{color: active === button.name ? "#FF6C00" : null}}>
                    {button.name}
                  </Link>
                </button>
              )
            })
          }
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default DataReport