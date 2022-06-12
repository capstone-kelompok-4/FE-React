import classes from "./PreviewCourse.module.css"
import ObjectiveLearner from '../../Components/ObjectiveLearner/ObjectiveLearner';
import Banner from '../../Components/BannerPreviewCourse/BannerPreviewCourse';
import MethodologyLearner from '../../Components/MethodologyLearner/MethodologyLearner';
import TargetLearner from '../../Components/TargetLearner/TargetLearner';
import Navbar from '../../Components/NavbarPreviewCourse/Navbar';
import Footer from '../../Components/Footer/Footer';
import StartCourse from '../../Components/StartCourse/StartCourse';
import { useEffect, useState } from "react" 
import axios from "axios";
import {useParams} from 'react-router-dom';

export default function PreviewCourse() {
  const [courseSection, setCourseSection] = useState([]);
  const [course, setCourse] = useState([]);
  const [materials, setMaterials]=useState([]);
  const params = useParams();
  const id = params.id;
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io/" ;
  useEffect(() => { 
    axios.get(`https://62a160e6cc8c0118ef4a5d6c.mockapi.io/courses/${id}/sections/${0+1}/materials`).then(res => setMaterials(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}courses/${id}/sections`).then(res => setCourseSection(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}courses/${id}`).then(res => setCourse(res.data)).catch(err => console.log(err.message));
  }, [])

  return (
    <>
      <Navbar/> 
        <div className={`mb-5 border ${classes.banner}`}>
          <Banner data ={course} />
        </div> 
        <div className='row'>
        <div className='col-sm-5'>
          <StartCourse data={courseSection} material={materials}/>
        </div>
        <div className={` ms-auto p-0 col-sm-7 ${classes.right}`}> 
            <div className='container mb-5'>
                <h2>A. Target Learner </h2>
                <TargetLearner data={course} />
            </div>
            <div className='container mb-5'>
                <h2>B. Objective Learner</h2>
                <ObjectiveLearner data={course}/>
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
