import React from 'react'
import { courseData } from '../../Assets/courses';
import {mycourses} from '../../Assets/mycourse';
import {training} from '../../Assets/training'
import AllCourse from '../../Components/AllCourse/AllCourse';
import SearchLearn from '../../Components/SearchLearning/SearchBar';
import SideNav from '../../Components/Navigation/SideNav';
import Footer from '../../Components/Footer/Footer';
import MyCourse from '../../Components/MyCourse/MyCourse' 
import Training from '../../Components/Training/Training'

export default function CourseOverview() {
  return (
    <>
      <SideNav/>
      <div className="row" style={{marginLeft: "70px"}}> 
      
        <div className=" p-0 my-5 col-md-12">  

        <section>
            <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-sm-12 bg-light mt-2 p-0'  >
                    <h2 className=''>COURSE OVERVIEW</h2>
                </div> 
                <div className='col-md-4 col-lg-4 col-sm-12 bg-light' >
                    <SearchLearn/>
                </div>
            </div>
            </div>
        </section>
            
        <div className='mb-5'>
          <MyCourse data={mycourses}/>
        </div>
        <div className='mb-5'>
          <Training data={training}/>
        </div>
          <AllCourse data={courseData}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
