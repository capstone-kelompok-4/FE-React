import React, {useState, useEffect} from 'react'
import classes from "./DetailCourse.module.css";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import SidebarSection from '../../Components/Navigation/SidebarSection';

// Assets
import SidebarIcon from "../../Assets/Icons/sidebar.svg";
import EclipseIcon from "../../Assets/Icons/eclipse.svg";
import ArrowRight from "../../Assets/Icons/arrow_right.svg";
import ArrowLeft from "../../Assets/Icons/arrow_left.svg";
import WhiteEclipse from "../../Assets/Icons/white_eclipse.svg";
import Checklist from "../../Assets/Icons/checklist.svg";
import CloseIcon from "../../Assets/Icons/close.svg";
import { BASE_URL, getToken, getUser } from '../../Configs/APIAuth';

function DetailCourse() {
  const { course_id, section_id, material_id} = useParams();
  // const prevMaterialId = parseInt(material_id) - 1;
  // const nextMaterialId = parseInt(material_id) + 1;

  const loggedInUser = getUser();
  const [dataCourse, setDataCourse] = useState([]);
  const [dataMaterial, setDataMaterial] = useState({});
  const [statusMaterial, setStatusMaterial] = useState("");
  // const [dataPrevMaterial, setDataPrevMaterial] = useState({});
  // const [dataNextMaterial, setDataNextMaterial] = useState({});
  const [courseTakenByCourseId, setCourseTakenByCourseId] = useState([]);

  const [showSidebar,setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const token = getToken();
    var configGetCourse = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetCourse).then(res => setDataCourse((res.data.data))).catch(err => console.log(err));

    var configGetMaterial = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}/sections/${section_id}/materials/${material_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetMaterial).then(res => setDataMaterial(res.data.data)).catch(err => console.log(err))

    getCourseTakenByCourseId();
    
  }, [course_id, section_id, material_id])
  
  const getCourseTakenByCourseId = () => {
    const token = getToken();
    var configGetCourseTakenByCourseId = {
      method: 'get',
      url: `${BASE_URL}/course-takens/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    axios(configGetCourseTakenByCourseId).then(res => setCourseTakenByCourseId(res.data.data)).catch(err => console.log(err));
  }

  let myCourseTaken = courseTakenByCourseId.filter(courseTaken => courseTaken.user.name === loggedInUser.name);
  console.log(myCourseTaken);

  const thisMaterial = myCourseTaken[0]?.reports.filter(report => report.material.id === +material_id);
  console.log(thisMaterial);

  setTimeout(() => {
    setStatusMaterial(thisMaterial[0]?.completed);
  }, 2000)

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

    axios(configEditProgressMaterial).then((res) => {
      getCourseTakenByCourseId()
      // setStatusMaterial(true);
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
            {dataMaterial.type === "VIDEO" && 
              (
                <iframe width="1280" height="420" src={dataMaterial.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              )
            }

            {dataMaterial.type === "SLIDE" && (
              <iframe
                width="100%"
                height="450px"
                title="Slides"
                src={dataMaterial.url}      
              />
            )}

            {dataMaterial.type === "QUIZ" && 
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
          {material_id !== "1" &&
            <Link to={`/`}>
              <div style={{display: "flex", columnGap: "20px", alignItems: "center"}}>
                <img src={ArrowLeft} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                {/* <h4 className={`m-0 ${classes.lessonNavigationText}`}>{dataPrevMaterial.name}</h4> */}
              </div>
            </Link>
          }   
        </div>
        <div className='col-8 col-md-4 text-center'>
          <button className={`${classes.completedBtn}`} onClick={() => completeHandler(dataMaterial.id)}>
            <img src={statusMaterial === true ? Checklist : WhiteEclipse} alt="icon" height="30px" width="30px" style={{marginRight: "10px"}}/>
            Completed
          </button>
        </div>
        <div className='col-2 col-md-4 text-end'>
          {material_id !== "21" &&
            <Link to={`/`}>
              <div style={{display: "flex", columnGap: "20px", flexDirection:"row-reverse", alignItems: "center"}}>
                <img src={ArrowRight} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                {/* <h4 className={classes.lessonNavigationText}>{dataNextMaterial.name}</h4> */}
              </div>
            </Link>
          }
        </div>
      </div>
      {/* End Lesson Navigation */}
    </>
  )
}

export default DetailCourse