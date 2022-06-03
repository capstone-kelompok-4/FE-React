import React from 'react'
import classes from "./Home.module.css"
import Calender from '../../Components/Calendar/Calender';
import Banner from '../../Components/Banner/Banner';
import CoursesContainer from '../../Components/Course/CoursesContainer';
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { userData } from '../../Assets/user';
import { courseData } from '../../Assets/courses';
import { onlineUser } from '../../Assets/onlineUser';

function Home() {
  return (
    <div className={`row ${classes.home}`}>
      <div className="col-xl-9 p-0 my-5 col-lg-8 col-md-12">
        <Banner data={userData}/>
        <CoursesContainer title="Course History" data={courseData} />
      </div>
      <div className={`col-xl-3 p-0 my-5 col-lg-4 col-md-12 ${classes.right}`}>
        <SearchBar/>
        <Calender/>
        <OnlineBoard data={onlineUser}/>
      </div>
    </div>
  )
}

export default Home