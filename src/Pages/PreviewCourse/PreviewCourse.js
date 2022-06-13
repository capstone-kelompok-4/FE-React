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
import Card from "../../Components/Card/Card";

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
  }, [id])

  return (
    <>
      <Navbar/> 
        <div className={`border ${classes.banner}`}>
          <Banner data={course} />
        </div> 
        <div className='row my-5'>
          <div className='col-sm-3'>
            <StartCourse data={courseSection} material={materials}/>
          </div>
          <div className={` ms-auto p-0 col-sm-9 ${classes.right}`}> 
            <Card className={classes.card}>
              <div className='container-fluid'>
                <h2>A. Target Learner </h2>
                <TargetLearner data={course} />
              </div>
            </Card>
            <Card className={classes.card}>
              <div className='container-fluid'>
                <h2>B. Objective Learning</h2>
                <ObjectiveLearner data={course}/>
              </div>
            </Card>
            <Card className={classes.card}>
              <div className='container-fluid'>
                <h2>C. Methodology Learning</h2>
                <MethodologyLearner />
              </div>
            </Card>
          </div>
        </div>
      <Footer/>
    </>
  )
}
