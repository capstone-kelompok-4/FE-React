import React from 'react'
import classes from "./PreviewCourse.module.css"
import ObjectiveLearner from '../../Components/ObjectiveLearner/ObjectiveLearner';
import Banner from '../../Components/BannerPreviewCourse/BannerPreviewCourse';
// import StartCourse from '../../Components/StartCourse/StartCourse';
import MethodologyLearner from '../../Components/MethodologyLearner/MethodologyLearner';
import TargetLearner from '../../Components/TargetLearner/TargetLearner';
import { userData } from '../../Assets/user';
import { courseData } from '../../Assets/courses';
import { onlineUser } from '../../Assets/onlineUser';
import Navbar from '../../Components/NavbarPreviewCourse/Navbar';
import Footer from '../../Components/Footer/Footer';
import StartCourse from '../../Components/StartCourse/StartCourse';

export default function PreviewCourse() {
  return (
    <>
      <Navbar/> 
        <div className={`mt-0 px-0 py-5 my-5 border ${classes.banner}`}>
          <Banner />
        </div> 
        <div className='row'>
        <div className='col-sm-5'>
          <StartCourse title="Course History" />
        </div>
        <div className={` ms-auto p-0 col-sm-7 ${classes.right}`}> 
            <div className='container mb-5'>
                <h2>A. Target Learner </h2>
                <TargetLearner/> 
            </div>
            <div className='container mb-5'>
                <h2>B. Objective Learner</h2>
                <ObjectiveLearner/>
            </div>
            <div className='container mb-5'>
                <h2>C. Methodology Learner</h2>
                <MethodologyLearner />
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
