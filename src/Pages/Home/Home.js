import React, { useEffect, useState } from 'react'
import classes from "./Home.module.css"
import axios from 'axios';
// Components
import Calender from '../../Components/Calendar/Calender';
import Banner from '../../Components/Banner/Banner';
import CoursesContainer from '../../Components/Course/CoursesContainer';
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard';
// import { userData } from '../../Assets/user';
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import { setUserSession } from '../../Configs/APIAuth';
// import { getUserData } from '../../Configs/APIAuth';

function Home() {
  const [userData, setUserData] = useState({});
  const [courseData, setCourseData] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://capstone-project-4.herokuapp.com/api/users',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5ueV9jaG9pQGdtYWlsLmNvbSJ9.xiz56FxgsqWrxQ2c7dSqt_HoOqsIlYL6WND7QDFuBZ0'
      }
    };
    axios(config).then(res => {
      setUserSession(res.data.data)
      setUserData(res.data)
    }).catch(err => console.log(err.message))

    // Hit Mockapi
    axios.get(`${baseURL}/courses`).then(res => setCourseData(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/online_user`).then(res => setOnlineUser(res.data)).catch(err => console.log(err.message));
  }, [])

  return (
    <>
      <SideNav/>
      <div className={`row ${classes.home}`} style={{marginLeft: "75px"}}>
        <div className="col-xl-9 p-0 mb-5 mt-3 col-lg-8 col-md-12">
          <Banner data={userData.data}/>
          <h5 style={{color: "#FF6C00", margin: "70px 70px 0"}}>Let's continue your progress</h5>
          <CoursesContainer title="Course History" data={courseData} showInfo={false} showProgressBar={true}/>
        </div>
        <div className={`col-xl-3 p-0 mb-5 mt-3 col-lg-4 col-md-12 ${classes.right}`}>
          <Calender/>
          <OnlineBoard data={onlineUser} title="Online Board"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home