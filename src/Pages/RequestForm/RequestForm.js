import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import classes from "./RequestForm.module.css"
import BackIcon from "../../Assets/Icons/back_icon.svg";

function RequestForm() {
  // const refEmail = useRef();
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  }

  const baseData = {
    fullname: "",
    email: "",
    specialist: "Designer",
    reqVariant: "",
    reqTitle: "",
    reqDetail: ""
  }

  const baseError = {
    fullname: "",    
  }

  const namaRegex = /^([A-Za-z]*$)/;
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value; 

    if (name === "fullname") {
      if (namaRegex.test(value)) {
          console.log("nama aman");
          setErrorMassage({
              ...errorMassage,
              nama: ""   
          })
      }else {
          console.log("nama salah");
          setErrorMassage({
              ...errorMassage,
              nama: "Nama Lengkap Harus Berupa Huruf!"   
          })
      }
    }

    setData ({
        ...data,
        [name]:value
    });
    console.log("variant",data.reqVariant);
    console.log("data",data);

  }

  const resetData =  () => {       
    setData(baseData);
    setErrorMassage(baseError);
    console.log("reset data");
    console.log("data",data)
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
                    <form>
                      <div className='mb-3'>
                        <label htmlFor="fullname" className={`form-label mb-2 ${classes.labeltext}`}>Full Name</label>  
                        <input type="text" className={`form-control ${classes.forminput}`} name="fullname" id="fullname" onChange={handleChange} placeholder="Your Name" required/>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="email" className={`form-label mb-2 ${classes.labeltext}`}>Your email</label>
                        <input type="email" className={`form-control ${classes.forminput}`} name="email" id="email" onChange={handleChange} placeholder="Your Email" required/>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form-label mb-2 ${classes.labeltext}`}>Specialist</label>  
                        <input type="text" className={`form-control ${classes.forminput}`} name="specialist" id="specialist" onChange={handleChange} value="Designer" disabled/>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form-label mb-2 ${classes.labeltext}`}>Request Variant</label>  
                        <div className='input-group'>
                          <div className={`form-check form-check-inline ${classes.formradio}`}>
                            <div className='px-4 py-3'>
                              <input className={`form-check-input ${classes.accent}`} defaultValue="course" checked={data.reqVariant === "course"} onClick={handleChange} type="radio" name="reqVariant" />
                              <label className="form-check-label ps-2" htmlFor="inlineRadio1">Course</label>
                            </div>  
                          </div>
                          <div className={`form-check form-check-inline ${classes.formradio}`}>
                            <div className='px-4 py-3'>
                              <input className={`form-check-input ${classes.accent}`} defaultValue="training" checked={data.reqVariant === "training"} onClick={handleChange} type="radio" name="reqVariant" />
                              <label className="form-check-label ps-2" htmlFor="inlineRadio2">Training</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="requestTitle" className={`form=label mb-2 ${classes.labeltext}`}>Request Title</label>  
                        <input type="text" className={`form-control ${classes.forminput}`} id="requestTitle" name='reqTitle' onChange={handleChange} placeholder="What course/training do you want?"/>
                      </div>
                      <div className='mb-5'>
                        <label htmlFor="requestDetail" className={`form=label mb-2 ${classes.labeltext}`}>Request Detail</label>                       
                        <textarea id="text" className={`form-control ${classes.formtextarea}`} onChange={handleChange} name="reqDetail" rows="6" cols="100" placeholder="Explain to us why you want to this request is approved?" />
                      </div>
                      <div className="d-flex justify-content-center mb-3 w-100">
                        <input onClick={resetData} type="Reset" name='Reset' value="Cancel" className={`btn btn-lg ${classes.buttoncancel}`}/>
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