import axios from "axios";
import classes from "./PreviewCourse.module.css"
import { useEffect, useState } from "react" 
import {useParams} from 'react-router-dom';
import Card from "../../Components/Card/Card";
import Banner from '../../Components/BannerPreviewCourse/BannerPreviewCourse';
import StartCourse from '../../Components/StartCourse/StartCourse';
import TargetLearner from '../../Components/TargetLearner/TargetLearner';
import ObjectiveLearner from '../../Components/ObjectiveLearner/ObjectiveLearner';
import MethodologyLearner from '../../Components/MethodologyLearner/MethodologyLearner';
import Footer from '../../Components/Footer/Footer';
import Background from "../../Assets/Images/bg_preview_course.png";
import DownloadIcon from "../../Assets/Images/download.png";
import { BASE_URL, getToken } from "../../Configs/APIAuth";

export default function PreviewCourse() {
  const [course, setCourse] = useState([]);
  const {course_id} = useParams();
  
  useEffect(() => { 
    const token = getToken();
    var config = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(config).then(res =>  setCourse(res.data.data)).catch(err => console.log(err));
  }, [course_id]);

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
                <MethodologyLearner data={course}/>
              </div>
            </Card>
          </div>
        </div>
      <Footer/>
    </>
  )
}
