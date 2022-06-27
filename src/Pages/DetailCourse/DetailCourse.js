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

function DetailCourse() {
  const { id } = useParams();
  const prevMaterialId = parseInt(id) - 1;
  const nextMaterialId = parseInt(id) + 1;

  const [dataMaterial, setDataMaterial] = useState({});
  const [dataSection, setDataSection] = useState({});
  const [dataPrevMaterial, setDataPrevMaterial] = useState({});
  const [dataNextMaterial, setDataNextMaterial] = useState({});
  const [completed, setCompleted] = useState(false);

  const [showSidebar,setShowSidebar] = useState(false);
  const handleSidebarShow = () => setShowSidebar(!showSidebar);

  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    axios.get(`${baseURL}/courses/1/sections/1`).then(res => setDataSection(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/1/materials/${id}`).then(res => setDataMaterial(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/1/materials/${prevMaterialId}`).then(res => setDataPrevMaterial(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/1/materials/${nextMaterialId}`).then(res => setDataNextMaterial(res.data)).catch(err => console.log(err.message));
  }, [id, nextMaterialId, prevMaterialId])
  
  const completeHandler = () => {
    setCompleted(!completed);
  }

  const openedSidebar = showSidebar ? classes.opened : classes.closed;

  return (
    <>
      <SidebarSection isOpen={showSidebar} id={id}/>
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
        <div className={classes.material}>
          <div className="row" style={{ margin: "auto", rowGap: "20px"}}>
            <h1 className={classes.sectionTitle}>{dataSection.name}</h1>
            <h4 className={classes.materialTitle}>{dataMaterial.name}</h4>
          </div>
          <div className="row py-5" style={{ margin: "auto"}}>
            {dataMaterial.type === "video" && 
              (
                <iframe width="1280" height="480" src={dataMaterial.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

            {dataMaterial.type === "resume" && 
              <iframe
                width="100%"
                height="500"
                title="Google docs"
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
          {id !== "1" ?
            <Link to={`/detail_course/${prevMaterialId}`}>
              <div style={{display: "flex", columnGap: "20px", alignItems: "center"}}>
                <img src={ArrowLeft} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
                <h4 className={`m-0 ${classes.lessonNavigationText}`}>{dataPrevMaterial.name}</h4>
              </div>
            </Link>
            : null
          }   
        </div>
        <div className='col-8 col-md-4 text-center'>
          <button className={`${classes.completedBtn}`} onClick={completeHandler}>
            <img src={completed === true ? Checklist : WhiteEclipse} alt="icon" height="30px" width="30px" style={{marginRight: "10px"}}/>
            Completed
          </button>
        </div>
        <div className='col-2 col-md-4 text-end'>
          <Link to={`/detail_course/${nextMaterialId}`}>
            <div style={{display: "flex", columnGap: "20px", flexDirection:"row-reverse", alignItems: "center"}}>
              <img src={ArrowRight} alt="icon" width="40px" height="40px" style={{backgroundColor: "#133461", borderRadius: "50%"}}/>
              <h4 className={classes.lessonNavigationText}>{dataNextMaterial.name}</h4>
            </div>
          </Link>
        </div>
      </div>
      {/* End Lesson Navigation */}
    </>
  )
}

export default DetailCourse