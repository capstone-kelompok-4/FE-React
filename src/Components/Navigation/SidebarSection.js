import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useClickOutSide } from '../../Hooks/useClickOutside';
import classes from "./SidebarSection.module.css";
import ParticipantIcon from "../../Assets/Icons/participant.svg";
import DataReportIcon from "../../Assets/Icons/data_report.svg"

function SidebarSection({isOpen, setIsOpen, course_id, data}) {
  const ref = useRef(null);
  useClickOutSide(ref, isOpen, setIsOpen)
  const navigate = useNavigate();

  const handlerParticipantPage = () => {
    navigate(`/preview_course/${course_id}/participants`);
  }
  const handlerDataReportPage = () => {
    navigate(`/preview_course/${course_id}/data_report/overview_report`);
  }

  return (
    <aside ref={ref} className={`${classes.sidebar} ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`} >
      <div style={{width: "80%"}}>
        <h4 className={`px-4 pt-4 ${classes.courseTitle}`}>{data?.name}</h4>
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
          {data?.sections?.map((section, index) => {
            return(
              <div className="accordion-item" style={{borderBottom: "2px solid #0D2341"}} key={index}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${classes.section}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${section.id}`}>
                    Section {section.number} <br/>
                    {section.name}
                  </button>
                </h2>
                <div id={`panelsStayOpen-${section.id}`} className="accordion-collapse collapse">
                  {section.materials?.map((material, idx) => {
                    return(
                      <div className={`accordion-body ${classes.material}`} style={{borderTop: "1px solid #0D2341"}} key={material.id}>
                        <Link to={`/preview_course/${course_id}/sections/${section.id}/detail_course/${material.id}`}>
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