import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useClickOutSide } from '../../Hooks/useClickOutside';
import classes from "./SidebarSection.module.css";
import ParticipantIcon from "../../Assets/Icons/participant.svg";
import DataReportIcon from "../../Assets/Icons/data_report.svg"

function SidebarSection({isOpen, setIsOpen, course_id, section_id, material_id}) {
  const ref = useRef(null);
  useClickOutSide(ref, isOpen, setIsOpen)

  const navigate = useNavigate();

  const [dataCourse, setDataCourse] = useState({})
  const [dataSection, setDataSection] = useState([]);
  const [dataSection1, setDataSection1] = useState([]);
  const [dataSection2, setDataSection2] = useState([]);
  const [dataSection3, setDataSection3] = useState([]);
  const [dataSection4, setDataSection4] = useState([]);
  const [dataSection5, setDataSection5] = useState([]);
  const [dataSection6, setDataSection6] = useState([]);
  const [dataSection7, setDataSection7] = useState([]);

  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    axios.get(`${baseURL}/courses/${course_id}`).then(res => setDataCourse(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections`).then(res => setDataSection(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/1/materials`).then(res => setDataSection1(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/2/materials`).then(res => setDataSection2(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/3/materials`).then(res => setDataSection3(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/4/materials`).then(res => setDataSection4(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/5/materials`).then(res => setDataSection5(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/6/materials`).then(res => setDataSection6(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/${course_id}/sections/7/materials`).then(res => setDataSection7(res.data)).catch(err => console.log(err.message));
  }, [course_id])
  const allSection = [dataSection1, dataSection2, dataSection3, dataSection4, dataSection5, dataSection6, dataSection7];

  const handlerParticipantPage = () => {
    navigate(`/preview_course/${course_id}/sections/${section_id}/detail_course/${material_id}/participants`);
  }
  const handlerDataReportPage = () => {
    navigate(`/preview_course/${course_id}/sections/${section_id}/detail_course/${material_id}/data_report/overview_report`);
  }

  return (
    <aside ref={ref} className={`${classes.sidebar} ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`} >
      <div style={{width: "80%"}}>
        <h4 className={`px-4 pt-4 ${classes.courseTitle}`}>{dataCourse.title}</h4>
      </div>
      <div className="accordion p-4">
        <div className="accordion-item" style={{borderBottom: "2px solid #0D2341", cursor: "pointer"}} onClick={handlerParticipantPage}>
         <div id="panelsStayOpen-Participant" className="accordion-collapse collapse show">
          <div className={`accordion-body ${classes.participants}`}>
            <img src={ParticipantIcon} alt="participantIcon" width="30px" height="30px" style={{marginRight: "5px"}} />
            <p>Participants</p> 
          </div>
         </div>
        </div>
          {dataSection.map((section, index) => {
            return(
              <div className="accordion-item" style={{borderBottom: "2px solid #0D2341"}} key={index}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${classes.section}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${section.id}`}>
                    Section {index + 1} <br/>
                    {section.name}
                  </button>
                </h2>
                <div id={`panelsStayOpen-${section.id}`} className="accordion-collapse collapse">
                  {allSection[section.id-1].map((material, idx) => {
                    return(
                      <div className={`accordion-body ${classes.material}`} style={{borderTop: "1px solid #0D2341"}} key={idx}>
                        <Link to={`/preview_course/${course_id}/sections/${index+1}/detail_course/${material.id}`}>
                          <p className='m-0'>{idx + 1} {material.name}</p>
                        </Link>
                      </div>
                    )
                  }) 
                  }
                </div>
              </div>
            )
          })}
        <div className="accordion-item" style={{borderBottom: "2px solid #0D2341", cursor: "pointer"}} onClick={handlerDataReportPage}>
         <div id="panelsStayOpen-Participant" className="accordion-collapse collapse show">
          <div className={`accordion-body ${classes.dataReport}`}>
            <img src={DataReportIcon} alt="participantIcon" width="30px" height="30px" style={{marginRight: "5px"}} />
            <p>Data Report</p>
          </div>
         </div>
        </div>
      </div>
    </aside>
  )
}

export default SidebarSection