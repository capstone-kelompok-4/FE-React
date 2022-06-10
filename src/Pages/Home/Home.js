import React, { useEffect, useState } from 'react'
import classes from "./Home.module.css"
import Calender from '../../Components/Calendar/Calender';
import Banner from '../../Components/Banner/Banner';
import CoursesContainer from '../../Components/Course/CoursesContainer';
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { userData } from '../../Assets/user';
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

function Home() {
  const [courseData, setCourseData] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    axios.get(`${baseURL}/courses`).then(res => setCourseData(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/online_user`).then(res => setOnlineUser(res.data)).catch(err => console.log(err.message));
  }, [])
  console.log(courseData);

  return (
    <>
      <SideNav/>
      <div className={`row ${classes.home}`} style={{marginLeft: "70px"}}>
        <div className="col-xl-9 p-0 my-5 col-lg-8 col-md-12">
          <Banner data={userData}/>
          <CoursesContainer title="Course History" data={courseData} />
        </div>
        <div className={`col-xl-3 p-0 my-5 col-lg-4 col-md-12 ${classes.right}`}>
          <SearchBar placeholder="Search" className={classes.searchBar}/>
          <Calender/>
          <OnlineBoard data={onlineUser}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home