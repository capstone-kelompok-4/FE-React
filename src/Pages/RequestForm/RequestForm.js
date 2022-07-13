import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import classes from "./RequestForm.module.css"
import BackIcon from "../../Assets/Icons/back_icon.svg";
import { BASE_URL, getToken, getUser } from '../../Configs/APIAuth';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function RequestForm() {
  const {course_id} = useParams();
  const user = getUser();
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(`/preview_course/${course_id}`);
  }

  const [course, setCourse] = useState({})
  useEffect(() => {
    const token = getToken();
    var configGetCourseById = {
      method: 'get',
      url: `${BASE_URL}/courses/${course_id}`,
      headers: { 
          'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetCourseById).then(res => setCourse(res.data.data)).catch(err => console.log(err))
  }, [course_id])

  const baseData = {
    fullname: user.name,
    email: user.username,
    specialist: user.user_specialization.name,
    reqVariant: "",
    reqTitle: "",
    reqDetail: ""
  }

  const [data, setData] = useState(baseData);
  console.log(data);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value; 

    setData ({
        ...data,
        [name]:value
    });
  }

  const resetData =  () => {       
    setData(baseData);
  }

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const dataRequest = JSON.stringify({
      "request_type": data.reqVariant,
      "course_id": course.id,
      "request_detail": data.reqDetail
    })
    
    const token = getToken();
    var configAddCourseTaken = {
      method: 'post',
      url: `${BASE_URL}/course-takens`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : dataRequest
    };
    axios(configAddCourseTaken).then(async () => {
      if(user.user_specialization.name === course.course_specialization.name){
        await Swal.fire(
          'Success!',
          "Request Telah Disetujui",
          "success"
        )
        await navigate(`/preview_course/${course_id}`)
      }else {
        await Swal.fire(
          "Success!",
          "Request Berhasil Terkirim",
          'success' 
        )
        await navigate(`/preview_course/${course_id}`)
      }
    })
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='d-flex my-5'> 
            <div className='px-4 py-1' style={{top: "0", left: "0"}}>
              <img src={BackIcon} alt="back_icon" width="40px" height="40px" onClick={backHandler}/>
            </div>
            <div className={`col ${classes.rightpage}`}>
              <div className={`d-flex flex-column align-items-center justify-content-center`}>
                <div className="border rounded-3 shadow">
                  <div className="d-flex flex-column align-items-center m-5 px-3 py-4">
                    <h1 className={`fw-boldmb-4 ${classes.headingtext}`}>Request Form</h1>
                    <form onSubmit={handleSubmitRequest}>
                      <div className='mb-3'>
                        <label htmlFor="fullname" className={`form-label mb-2 ${classes.labeltext}`}>Full Name</label>  
                        <input 
                          type="text" 
                          className={`form-control ${classes.forminput}`} 
                          name="fullname" 
                          id="fullname" 
                          placeholder="Your Name" 
                          defaultValue={data.fullname}
                          readOnly
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="email" className={`form-label mb-2 ${classes.labeltext}`}>Your email</label>
                        <input 
                          type="email" 
                          className={`form-control ${classes.forminput}`} 
                          name="email" 
                          id="email" 
                          placeholder="Your Email" 
                          defaultValue={data.email}
                          style={{width: "50%"}}
                          readOnly
                          />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form-label mb-2 ${classes.labeltext}`}>Specialist</label>  
                        <input 
                          type="text" 
                          className={`form-control ${classes.forminput}`} 
                          name="specialist" 
                          id="specialist"
                          defaultValue={data.specialist} 
                          disabled
                          style={{width: "50%"}}
                          readOnly
                          />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form-label mb-2 ${classes.labeltext}`}>Request Variant</label>  
                        <div className='input-group'>
                          <div className={`form-check form-check-inline ${classes.formradio}`}>
                            <div className='px-4 py-3'>
                              <input className={`form-check-input ${classes.accent}`} defaultValue="0" onClick={handleChange} type="radio" name="reqVariant" />
                              <label className="form-check-label ps-2" htmlFor="inlineRadio1">Course</label>
                            </div>  
                          </div>
                          <div className={`form-check form-check-inline ${classes.formradio}`}>
                            <div className='px-4 py-3'>
                              <input className={`form-check-input ${classes.accent}`} defaultValue="1" onClick={handleChange} type="radio" name="reqVariant" />
                              <label className="form-check-label ps-2" htmlFor="inlineRadio2">Training</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form=label mb-2 ${classes.labeltext}`}>Request Title</label>  
                        <input 
                          type="text" 
                          className={`form-control ${classes.forminput}`} 
                          id="requestTitle" 
                          name='reqTitle' 
                          defaultValue={course.name} 
                          placeholder="What course/training do you want?"
                          style={{width: "80%"}}
                          readOnly
                          />
                      </div>
                      <div className='mb-5'>
                        <label htmlFor="requestDetail" className={`form=label mb-2 ${classes.labeltext}`}>Request Detail</label>                       
                        <textarea id="text" className={`form-control ${classes.formtextarea}`} onChange={handleChange} value={data.reqDetail} name="reqDetail" rows="6" cols="100" placeholder="Explain to us why you want to this request is approved?" />
                      </div>
                      <div className="d-flex justify-content-center mb-3 w-100">
                        <input onClick={resetData} type="Reset" name='Reset' value="Reset" className={`btn btn-lg ${classes.buttoncancel}`}/>
                        <div className='px-4'></div>
                        <button type="submit" className={`btn btn-lg px-5 ${classes.buttonsubmit}`}>
                          <span className='px-4'>Submit</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestForm