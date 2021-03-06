import React, { useEffect, useState } from 'react'
import {training} from '../../Assets/training'
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import Training from '../../Components/Training/Training'
import CoursesContainer from '../../Components/Course/CoursesContainer';
import MyCoursesContainer from '../../Components/Course/MyCoursesContainer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';
import { BASE_URL, getToken } from '../../Configs/APIAuth';

export default function CourseOverview() {
  const [allCourseData, setAllCourseData] = useState([]);
  const [myCoursesData, setMyCoursesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = getToken();
    setLoading(true)
    var configGetAllCourses = {
      method: 'get',
      url: `${BASE_URL}/courses`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    var configGetCourseTaken = {
      method: 'get',
      url: `${BASE_URL}/course-takens/history`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetAllCourses).then(res => {
      setAllCourseData(res.data.data)
      setLoading(false);
    }).catch(err => console.log(err));

    axios(configGetCourseTaken).then(res => {
      setMyCoursesData(res.data.data.filter(data => data.status === "ACCEPTED"))
      setLoading(false);
    }).catch(err => setLoading(false));
  }, [])

  // Handle Search Bar
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <SideNav/>
      <div className="row" style={{marginLeft: "75px", marginBottom: "6rem"}}> 
        <div className="p-0 col-md-12 my-4">  
          <div style={{margin: "20px 70px"}}>
            <div className='d-flex justify-content-between align-items-center py-3' style={{flexWrap: 'wrap'}}>
              <div>
                <h2 className='m-0' style={{fontFamily: "Mulish", fontWeight: "700", color: "#0D2341", letterSpacing: "0.02em"}}>COURSE OVERVIEW</h2>
              </div> 
              <div>
                <SearchBar placeholder="Cari course atau webinar ?" onChange={handleSearch}/>
              </div>
            </div>
          </div>
  
          <div className='my-5' >
            <MyCoursesContainer data={myCoursesData} title="My Course" loading={loading} showInfo={false} showProgressBar={true} className={"row row-cols-sm-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0"} searchTerm={searchTerm}/>
          </div>
          <div className='my-5' >
            <Training data={training}/>
          </div>
          <div className="my-5" >
            <CoursesContainer data={allCourseData} title="All Course" loading={loading} showMoreAble={true} showInfo={true} showProgressBar={false} className={"row row-cols-sm-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0"} searchTerm={searchTerm}/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
