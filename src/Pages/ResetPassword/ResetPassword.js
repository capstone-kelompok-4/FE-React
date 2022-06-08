import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ResetPassword.module.css"

function ResetPassword() {
  
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
              <h1 className="mb-5">
                Learning Management System Corporate to Upgrade Skills <br/> The Employee
              </h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum pretium quis quisque aliquam tortor ullamcorper cum.{" "}
              </h5>
            </div>
          </div>
          <div className="col" style={{ backgroundColor: "grey" }}>
            <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
              <h1>Create New Password </h1>
              <p className="mb-4">Your new password must be different from previous used passwords.</p>
              <div className="d-flex flex-column mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <div class="input-group">
                  <input type="password" class={`form-control ${classes.forminput}`} id="newPassword" ref={refPassword} />
                </div>
              </div>
              <div className="d-flex flex-column mb-4">
                <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                <div class="input-group">
                  <input type="password" class={`form-control ${classes.forminput}`} id="confirmNewPassword" ref={refConfirmPassword} />
                </div>
              </div>
              <div className="d-flex flex-column">
                <button type="button" class={`${classes.buttonreset} btn`} onClick={() => navigate("/login")}>
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
