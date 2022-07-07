import React, { useEffect, useState } from 'react'
import {training} from '../../Assets/training'
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import Training from '../../Components/Training/Training'
import CoursesContainer from '../../Components/Course/CoursesContainer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';

export default function CourseOverview() {
  const [courseData, setCourseData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    axios.get(`${baseURL}/courses`).then(res => setCourseData(res.data)).catch(err => console.log(err.message));
  }, [])

  // Handle Search Bar
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <SideNav/>
      <div className="row" style={{marginLeft: "75px"}}> 
        <div className="p-0 col-md-12 my-4">  
          <div style={{margin: "20px 70px"}}>
            <div className='d-flex justify-content-between align-items-center py-3' style={{flexWrap: 'wrap'}}>
              <div>
                <h2 className='m-0' style={{fontFamily: "Mulish", fontWeight: "600", color: "#0D2341"}}>COURSE OVERVIEW</h2>
              </div> 
              <div>
                <SearchBar placeholder="Mau belajar apa hari ini ?" onChange={handleSearch}/>
              </div>
            </div>
          </div>
  
          <div className='my-5' >
            <CoursesContainer data={courseData} title="My Course" showInfo={false} showProgressBar={true} className={"row row-cols-sm-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0"} searchTerm={searchTerm}/>
          </div>
          <div className='my-5' >
            <Training data={training}/>
          </div>
          <div className="my-5" >
            <CoursesContainer data={courseData} title="All Course" showMoreAble={true} showInfo={true} showProgressBar={false} className={"row row-cols-sm-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0"} searchTerm=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
