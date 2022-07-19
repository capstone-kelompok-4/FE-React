import React, { useEffect, useState } from 'react'
import classes from "./Home.module.css"
import axios from 'axios';
import { BASE_URL, getToken, getUser, removeUserSession } from '../../Configs/APIAuth';
// Components
import Calender from '../../Components/Calendar/Calender';
import Banner from '../../Components/Banner/Banner';
import MyCoursesContainer from '../../Components/Course/MyCoursesContainer';
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard';
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL_MOCKAPI = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  const user = getUser();

  useEffect(() => {
    setLoading(true)
    const token = getToken();
    var config = {
      method: 'get',
      url: `${BASE_URL}/course-takens/history`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(config).then((res) => {
      setLoading(false);
      setCourseData(res.data.data.filter(data => data.status === "ACCEPTED"))
    }).catch(err => {
      setLoading(false);
      if(err.response.status === 403) {
        Swal.fire(
          'Oops!',
          'Sesi anda telah berakhir, silahkan login kembali',
          'warning'
        ).then(() => {
          removeUserSession();
          navigate("/login")
        })
      } 
    });
  
    axios.get(`${BASE_URL_MOCKAPI}/online_user`).then(res => {
      setLoading(false);
      setOnlineUser(res.data)
    }).catch(err => {
      setLoading(false);
      console.log(err.message)
    });
  }, [navigate])

  return (
    <>
      <SideNav/>
      <div className={`row ${classes.home}`} style={{marginLeft: "75px"}}>
        <div className="col-xl-9 p-0 mb-5 mt-3 col-lg-8 col-md-12">
          <Banner data={user}/>
          <h5 style={{color: "#FF6C00", margin: "70px 70px 0"}}>Let's continue your progress</h5>
          <MyCoursesContainer 
            title="Course History" 
            data={courseData} 
            loading={loading} 
            showInfo={false} 
            showProgressBar={true} 
            className={`row row-cols-sm-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 g-4 my-0`} 
            searchTerm=""
          />
        </div>
        <div className={`col-xl-3 p-0 mb-5 mt-3 col-lg-4 col-md-12 ${classes.right}`}>
          <Calender/>
          <OnlineBoard data={onlineUser} title="Online Board" loading={loading}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home