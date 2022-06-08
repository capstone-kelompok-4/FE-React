import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import classes from "./ForgotPassword.module.css"

function ForgotPassword() {    
    const refEmail = useRef();
    const navigate = useNavigate();
    
  return (
    <>
        <div className="container-fluid">
            <div className="row ">
                <div className="col">
                    <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
                        <h1 className="mb-5">
                            Learning Management System Corporate to Upgrade Skills <br/>The Employee
                        </h1>
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Condimentum pretium quis quisque aliquam tortor ullamcorper cum.{" "}
                        </h5>
                    </div>
                </div>
                <div className="col" style={{ backgroundColor: "grey" }}>
                    <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
                        <h5><a className={`nav-link ${classes.colorteks}`} href='/login'>Back to Login</a></h5>
                        <h1>Forgot Password</h1>
                        <p className="mb-4">Send a link to your email to reset your password</p>
                        <div className="d-flex flex-column">
                            <label for="username" class="form-label">Your email</label>
                            <div class="input-group mb-3">
                                <input type="email" class={`form-control ${classes.forminput}`} id="email" ref={refEmail} placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="d-flex flex-column mb-3 ">
                            <button type="button" class={`btn ${classes.buttonreset}`} onClick={() => navigate("/ResetPassword")}>
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