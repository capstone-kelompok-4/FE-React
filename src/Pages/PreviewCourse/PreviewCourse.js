import classes from "./PreviewCourse.module.css"
import ObjectiveLearner from '../../Components/ObjectiveLearner/ObjectiveLearner';
import Banner from '../../Components/BannerPreviewCourse/BannerPreviewCourse';
import MethodologyLearner from '../../Components/MethodologyLearner/MethodologyLearner';
import TargetLearner from '../../Components/TargetLearner/TargetLearner';
import Footer from '../../Components/Footer/Footer';
import StartCourse from '../../Components/StartCourse/StartCourse';
import { useEffect, useState } from "react" 
import axios from "axios";
import {useParams} from 'react-router-dom';
import Card from "../../Components/Card/Card";
import Background from "../../Assets/Images/bg_preview_course.png";
import DownloadIcon from "../../Assets/Images/download.png";

export default function PreviewCourse() {
  const [course, setCourse] = useState([]);
  const {course_id} = useParams();
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io/" ;
  useEffect(() => { 
    axios.get(`${baseURL}courses/${course_id}`).then(res => setCourse(res.data)).catch(err => console.log(err.message));
  }, [course_id])
  return (
    <>
        <div className={`border ${classes.banner}`} style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "right",
          position: "relative",
          height: "60vh", 
        }}>
          <Banner data={course} />
        </div> 
        <div className='row my-5'>
          <div className='col-sm-4 col-lg-3'>
            <StartCourse courseId={course_id}/>
          </div>
          <div className={` ms-auto col-sm-8 col-lg-9 ${classes.right}`}> 
            <Card className={classes.card} id="TargetLearner">
              <div className='container-fluid' style={{position: "relative"}} >
                <h2 >A. Target Learner </h2>
                <TargetLearner data={course} />
                <img src={DownloadIcon} alt="downloadIcon" width="60px" height="60px" style={{position: "absolute", top: "0", right: "0"}} />
              </div>
            </Card>
            <Card className={classes.card} id="ObjectiveLearning">
              <div className='container-fluid' >
                <h2 >B. Objective Learning</h2>
                <ObjectiveLearner data={course}/>
              </div>
            </Card>
            <Card className={classes.card} id="MethodologyLearning">
              <div className='container-fluid' >
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
