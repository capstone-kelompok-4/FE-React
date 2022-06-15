import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import classes from "./ForgotPassword.module.css"
import leftPict from "../../Assets/Image/pict_login_page.png";

function ForgotPassword() {    
    const refEmail = useRef();
    const navigate = useNavigate();
    
  return (
    <>
        <div className="container-fluid">
            <div className="row ">
                <div className={`col ${classes.leftpage}`}>
                    <div className={`d-flex flex-column align-items-start justify-content-center px-3 ${classes.layout}`}>
                        <h1 className={`mt-5 mb-4 px-5  ${classes.lefttextcolor} ${classes.sizeheading}`}>
                            Learning Management System Corporate to Upgrade Skills The Employee
                        </h1>
                        <h5 className={`mb-5 px-5 ${classes.lefttextcolor} ${classes.sizetext}`}>
                            Tech talent incubator yang memberikan kesempatan bagi <br/>banyak individu untuk menjadi tech talent profesional dan <br />berkualitas bahkan tanpa latar Pendidikan IT.
                        </h5>
                        <img className='m-auto' src={leftPict} alt="leftPict" />
                    </div>
                </div>
                <div className={`col ${classes.rightpage}`}>
                    <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
                        <h5 className={`${classes.headingtext}`}><a className={`nav-link ${classes.colorteks}`} href='/login'>Back to Login</a></h5>
                        <h1 className={`${classes.headingtext}`}>Forgot Password</h1>
                        <p className={`mb-4 ${classes.smalltext}`}>Send a link to your email to reset your password</p>
                        <div className="d-flex flex-column">
                            <label for="username" className={`form=label mb-2 ${classes.labeltext}`}>Your email</label>
                            <div class="input-group mb-3">
                                <input type="email" class={`form-control ${classes.forminput}`} id="email" ref={refEmail} placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="d-flex flex-column mb-3 ">
                            <button type="button" class={`btn ${classes.buttonreset}`} onClick={() => navigate("/reset_password")}>
                                Send Reset Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword