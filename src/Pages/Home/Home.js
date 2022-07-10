import React, { useEffect, useState } from 'react'
import classes from "./Home.module.css"
import axios from 'axios';
import { BASE_URL, getToken, getUser } from '../../Configs/APIAuth';
// Components
import Calender from '../../Components/Calendar/Calender';
import Banner from '../../Components/Banner/Banner';
import CoursesContainer from '../../Components/Course/CoursesContainer';
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard';
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';

function Home() {
  const [courseData, setCourseData] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const BASE_URL_MOCKAPI = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  const user = getUser();

  useEffect(() => {
    const token = getToken();
    var config = {
      method: 'get',
      url: `${BASE_URL}/course-takens/history`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(config).then(res => setCourseData(res.data.data)).catch(err => console.log(err));

    // Hit Mockapi
    // axios.get(`${BASE_URL_MOCKAPI}/courses`).then(res => console.log(res.data)).catch(err => console.log(err.message));
    axios.get(`${BASE_URL_MOCKAPI}/online_user`).then(res => setOnlineUser(res.data)).catch(err => console.log(err.message));
  }, [])

  let newData = []

  courseData.map(course => {
    return(
      newData.push(course.course_take)
    )
  })

  return (
    <>
      <SideNav/>
      <div className={`row ${classes.home}`} style={{marginLeft: "75px"}}>
        <div className="col-xl-9 p-0 mb-5 mt-3 col-lg-8 col-md-12">
          <Banner data={user}/>
          <h5 style={{color: "#FF6C00", margin: "70px 70px 0"}}>Let's continue your progress</h5>
          <CoursesContainer title="Course History" data={newData} showInfo={false} showProgressBar={true} className={`row row-cols-sm-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 g-4 my-0`} searchTerm=""/>
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