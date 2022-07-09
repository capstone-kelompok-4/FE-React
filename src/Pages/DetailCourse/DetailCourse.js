import React, {useState, useEffect} from 'react'
import classes from "./DetailCourse.module.css";
import { Link, useParams } from 'react-router-dom';
import ReactGoogleSlides from 'react-google-slides';
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
import { BASE_URL, getToken } from '../../Configs/APIAuth';

function DetailCourse() {
  const { course_id, section_id, material_id} = useParams();
  const prevMaterialId = parseInt(material_id) - 1;
  const nextMaterialId = parseInt(material_id) + 1;

  const [dataCourse, setDataCourse] = useState([]);
  const [dataMaterial, setDataMaterial] = useState({});
  const [dataPrevMaterial, setDataPrevMaterial] = useState({});
  const [dataNextMaterial, setDataNextMaterial] = useState({});
  const [completed, setCompleted] = useState(false);

  const [showSidebar,setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  let nextSectionId = section_id;
  let prevSectionId = section_id;
  if(nextMaterialId === 4 || nextMaterialId === 7 || nextMaterialId === 10 || nextMaterialId === 13 || nextMaterialId === 16 || nextMaterialId === 19) {
    nextSectionId++
  }
  if(prevMaterialId === 3 || prevMaterialId === 6 || prevMaterialId === 9 || prevMaterialId === 12 || prevMaterialId === 15 || prevMaterialId === 18){
    prevSectionId--;
  }

  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
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

    axios.get(`${baseURL}/courses/${course_id}/sections/${section_id}/materials/${material_id}`).then(res => setDataMaterial(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/${prevSectionId}/materials/${prevMaterialId}`).then(res => setDataPrevMaterial(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/${nextSectionId}/materials/${nextMaterialId}`).then(res => setDataNextMaterial(res.data)).catch(err => console.log(err.message));
  }, [course_id, section_id, material_id, nextMaterialId, prevMaterialId, prevSectionId, nextSectionId])
  
  const completeHandler = () => {
    setCompleted(!completed);
  }

  const openedSidebar = showSidebar ? classes.opened : classes.closed;

  
  return (
    <>
      <SidebarSection isOpen={showSidebar} course_id={course_id} section_id={section_id} material_id={material_id} data={dataCourse}/>
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
            {dataMaterial.type === "video" && 
              (
                <iframe width="1280" height="420" src={dataMaterial.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              )
            }

            {dataMaterial.type === "material" && (
              <ReactGoogleSlides 
                height={480}
                slidesLink={dataMaterial.url}
                showControls
                position={1}
              />
            )}

            {dataMaterial.type === "quiz" && 
              <iframe
                width="100%"
                height="480"
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
            <Link to={`/preview_course/${course_id}/sections/${prevSectionId}/detail_course/${prevMaterialId}`}>
              <div style={{display: "flex", columnGap: "20px", alignItems: "center"}}>
                <img src={ArrowLeft} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                <h4 className={`m-0 ${classes.lessonNavigationText}`}>{dataPrevMaterial.name}</h4>
              </div>
            </Link>
          }   
        </div>
        <div className='col-8 col-md-4 text-center'>
          <button className={`${classes.completedBtn}`} onClick={completeHandler}>
            <img src={completed === true ? Checklist : WhiteEclipse} alt="icon" height="30px" width="30px" style={{marginRight: "10px"}}/>
            Completed
          </button>
        </div>
        <div className='col-2 col-md-4 text-end'>
          {material_id !== "21" &&
            <Link to={`/preview_course/${course_id}/sections/${nextSectionId}/detail_course/${nextMaterialId}`}>
              <div style={{display: "flex", columnGap: "20px", flexDirection:"row-reverse", alignItems: "center"}}>
                <img src={ArrowRight} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                <h4 className={classes.lessonNavigationText}>{dataNextMaterial.name}</h4>
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