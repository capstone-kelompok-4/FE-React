import React, {useState, useEffect} from 'react'
import { CircularProgress } from '@mui/material';
import classes from "./DetailCourse.module.css";
import axios from "axios";
import SidebarSection from '../../Components/Navigation/SidebarSection';

// Assets
import SidebarIcon from "../../Assets/Icons/sidebar.svg";
import EclipseIcon from "../../Assets/Icons/eclipse.svg";
import WhiteEclipse from "../../Assets/Icons/white_eclipse.svg";
import Checklist from "../../Assets/Icons/checklist.svg";
import CloseIcon from "../../Assets/Icons/close.svg";
import { BASE_URL, getToken, getUser } from '../../Configs/APIAuth';
import { useParams } from 'react-router-dom';

function DetailCourse() {
  const { course_id, section_id, material_id} = useParams();
  const loggedInUser = getUser();

  const [loading, setLoading] = useState(false);
  const [dataCourse, setDataCourse] = useState([]);
  const [dataMaterial, setDataMaterial] = useState({});
  const [statusMaterial, setStatusMaterial] = useState("");
  const [courseTakenByCourseId, setCourseTakenByCourseId] = useState([]);

  const [showSidebar,setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  useEffect(() => {

    // GET COURSE BY ID
    setLoading(true);
    const token = getToken();
    var configGetCourse = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetCourse).then((res) => {
      setLoading(false)
      setDataCourse(res.data.data);
    }).catch(err => console.log(err));

    // GET MATERIAL
    setLoading(true);
    var configGetMaterial = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}/sections/${section_id}/materials/${material_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetMaterial).then(res => {
      setLoading(false);
      setDataMaterial(res.data.data);
    }).catch(err => {
      setLoading(false);
      console.log(err);
    });

    // GET COURSE TAKEN BY COURSE ID
    var configGetCourseTakenByCourseId = {
      method: 'get',
      url: `${BASE_URL}/course-takens/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    axios(configGetCourseTakenByCourseId).then(res => setCourseTakenByCourseId(res.data.data)).catch(err => console.log(err));
  }, [course_id, section_id, material_id])

  // TEST
  let myCourseTaken = courseTakenByCourseId.filter(courseTaken => courseTaken.user.name === loggedInUser.name);
  const thisMaterial = myCourseTaken[0]?.reports.filter(report => report.material.id === +material_id);
  setTimeout(() => {
    setStatusMaterial(thisMaterial[0]?.completed);
  }, 3000)
  // TEST
  
  // Button Complete Handler
  const completeHandler = (material_id) => {
    const token = getToken();
    var data = JSON.stringify({
      "material_id": material_id
    });
    
    var configEditProgressMaterial = {
      method: 'put',
      url: `${BASE_URL}/course-takens/progress/${myCourseTaken[0].id}`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(configEditProgressMaterial).then(() => {
      var configGetCourseTakenByCourseId = {
        method: 'get',
        url: `${BASE_URL}/course-takens/courses/${course_id}`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
  
      axios(configGetCourseTakenByCourseId).then(res => setCourseTakenByCourseId(res.data.data)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  const openedSidebar = showSidebar ? classes.opened : classes.closed;
  
  return (
    <>
      <SidebarSection isOpen={showSidebar} course_id={course_id} data={dataCourse}/>
      {/* Start Content Material */}
      <div style={{backgroundColor: "#fff", height: "100%"}}>
        <div style={{padding: "20px"}}>
          <div className={`${classes.imageWrapper} ${openedSidebar}`} style={{display: "inline-block", cursor: "pointer", zIndex: "2"}}  onClick={handleSidebarShow}>
            {showSidebar ? (
              <img src={CloseIcon} alt="icon" width="40px" height="40px"/>
              ):(
              <>
                <img src={EclipseIcon} alt="icon" width="40px" height="40px" style={{backgroundColor: "#0D2341", borderRadius: "50%"}}/>
                <img src={SidebarIcon} alt="icon" width="18px" height="18px" className={classes.innerImage}/>
              </>
              )
            }
          </div>
        </div>
        <div className={classes.materialInfo}>
          <div className="row" style={{ margin: "auto", rowGap: "20px"}}>
            <h2 className={classes.sectionTitle}>{dataCourse.name}</h2>
            <h4 className={classes.materialTitle}>{dataMaterial.name}</h4>
          </div>
        </div>
        <div className={classes.material}>
          <div className="row py-5" style={{ margin: "auto", width: "80%"}}>
            {loading && (
              <div className={classes.spinnerContain}>
                <CircularProgress style={{ width: "200px", height: "200px", color: "#FF6C00" }} />
              </div>
            )}

            {!loading && dataMaterial.type === "VIDEO" && 
              (
                <iframe width="1280" height="450" src={dataMaterial.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              )
            }

            {!loading && dataMaterial.type === "SLIDE" && (
              <iframe
                width="100%"
                height="450px"
                title="Slides"
                src={dataMaterial.url}      
              />
            )}

            {!loading && dataMaterial.type === "QUIZ" && 
              <iframe
                width="100%"
                height="450px"
                title="Google form"
                src={dataMaterial.url}      
              />
            }
          </div>
        </div>
      </div>
      {/* End of Content Material */}

      {/* Start Lesson Navigation */}
      <div className={`row align-items-center py-5 px-3 ${classes.lessonNavigation}`} style={{backgroundColor: "#133461",  width: "100%", margin: "0"}}>
        <div className='col-2 col-md-4 text-start'>
          {/* {indexOfThisSection === "0" && indexOfThisMaterial === "0" && !loading &&
            <Link to={`/`}>
              <div style={{display: "flex", columnGap: "20px", alignItems: "center"}}>
                <img src={ArrowLeft} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                <h4 className={`m-0 ${classes.lessonNavigationText}`}>{dataPrevMaterial.name}</h4>
              </div>
            </Link>
          } */}
        </div>
        <div className='col-8 col-md-4 text-center'>
          <button className={`${classes.completedBtn}`} onClick={() => completeHandler(dataMaterial.id)}>
            <img src={statusMaterial === true ? Checklist : WhiteEclipse} alt="icon" height="30px" width="30px" style={{marginRight: "10px"}}/>
            Completed
          </button>
        </div>
        <div className='col-2 col-md-4 text-end'>
          {/* {indexOfThisSection !== "5" && indexOfThisMaterial !== "2" && !loading &&
            <Link to={`/preview_course/${course_id}/sections/${dataOfThisSection?.id}/detail_course/${dataOfNextMaterial?.id}`}>
              <div style={{display: "flex", columnGap: "20px", flexDirection:"row-reverse", alignItems: "center"}}>
                <img src={ArrowRight} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                <h4 className={classes.lessonNavigationText}>{dataOfNextMaterial?.name}</h4>
              </div>
            </Link>
          } */}
        </div>
      </div>
      {/* End Lesson Navigation */}
    </>
  )
}

export default DetailCourse