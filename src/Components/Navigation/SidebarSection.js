import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useClickOutSide } from '../../Hooks/useClickOutside';
import classes from "./SidebarSection.module.css";
import ParticipantIcon from "../../Assets/Icons/participant.svg";
import DataReportIcon from "../../Assets/Icons/data_report.svg"

function SidebarSection({isOpen, setIsOpen}) {
  const ref = useRef(null);
  useClickOutSide(ref, isOpen, setIsOpen)

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
    axios.get(`${baseURL}/courses/1`).then(res => setDataCourse(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections`).then(res => setDataSection(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/1/materials`).then(res => setDataSection1(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/2/materials`).then(res => setDataSection2(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/3/materials`).then(res => setDataSection3(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/4/materials`).then(res => setDataSection4(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/5/materials`).then(res => setDataSection5(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/6/materials`).then(res => setDataSection6(res.data)).catch(err => console.log(err.message));
    axios.get(`${baseURL}/courses/1/sections/7/materials`).then(res => setDataSection7(res.data)).catch(err => console.log(err.message));
  }, [])
  const allSection = [dataSection1, dataSection2, dataSection3, dataSection4, dataSection5, dataSection6, dataSection7];

  return (
    <aside ref={ref} className={`${classes.sidebar} ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`} >
      <div style={{width: "80%"}}>
        <h4 className='px-4 pt-4 m-0' style={{fontFamily: "Mulish"}}>{dataCourse.title}</h4>
      </div>
      <div className="accordion p-4">
        <div className="accordion-item" style={{borderBottom: "2px solid #0D2341"}}>
          <h2 className="accordion-header">
            <button className={`accordion-button ${classes.section}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-Participant">
              <img src={ParticipantIcon} alt="participantIcon" width="30px" height="30px" style={{marginRight: "5px"}} /> Participant
            </button>
         </h2>
         <div id="panelsStayOpen-Participant" className="accordion-collapse collapse show">
          {/* <div className={`accordion-body ${classes.material}`} style={{borderTop: "1px solid #0D2341"}}>
          </div> */}
         </div>
        </div>
          {dataSection.map((section, idx) => {
            return(
              <div className="accordion-item" style={{borderBottom: "2px solid #0D2341"}}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${classes.section}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${section.id}`}>
                    Section {idx + 1} <br/>
                    {section.name}
                  </button>
                </h2>
                <div id={`panelsStayOpen-${section.id}`} className="accordion-collapse collapse show">
                  {allSection[section.id-1].map((material, idx) => {
                    return(
                      <div className={`accordion-body ${classes.material}`} style={{borderTop: "1px solid #0D2341"}}>
                        <Link to={`/detail_course/${material.id}`}>
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
        <div className="accordion-item" style={{borderBottom: "2px solid #0D2341"}}>
          <h2 className="accordion-header">
            <button className={`accordion-button ${classes.section}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-DataReport">
            <img src={DataReportIcon} alt="participantIcon" width="30px" height="30px" style={{marginRight: "5px"}} /> Data Report
            </button>
         </h2>
         <div id="panelsStayOpen-DataReport" className="accordion-collapse collapse show">
          {/* <div className={`accordion-body ${classes.material}`} style={{borderTop: "1px solid #0D2341"}}>
          </div> */}
         </div>
        </div>
      </div>
    </aside>
  )
}

export default SidebarSection