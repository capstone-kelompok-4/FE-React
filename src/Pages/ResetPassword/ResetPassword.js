import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ResetPassword.module.css"
import leftPict from "../../Assets/Image/pict_login_page.png";

function ResetPassword() {
  
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col ${classes.leftpage}`}>
            <div className={`d-flex flex-column align-items-start justify-content-center px-3 ${classes.layout}`}>
              <h1 className={`mt-5 mb-4 px-5 ${classes.lefttextcolor} ${classes.sizeheading}`}>
                Learning Management System Corporate to Upgrade Skills The Employee
              </h1>
              <h5 className={`mb-5 px-5 ${classes.lefttextcolor} ${classes.sizetext} `}>
                Tech talent incubator yang memberikan kesempatan bagi <br />banyak individu untuk menjadi tech talent profesional dan <br />berkualitas bahkan tanpa latar Pendidikan IT.
              </h5>
              <img className="px-5" src={leftPict} alt="leftPict" />
            </div>
          </div>
          <div className="col">
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
