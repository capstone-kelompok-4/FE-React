import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ResetPassword.module.css"
// import leftPict from "../../Assets/Image/pict_login_page.png";

function ResetPassword() {
  
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col ${classes.rightpage}`}>
            <div className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}>
              <div className="border rounded-3 shadow">
                <div className="d-flex flex-column align-items-center m-5 p-5">
                  <h1 className={`${classes.headingtext}`}>Create New Password </h1>
                  <p className={`text-center mb-4 ${classes.smalltext}`}>Your new password must be different from previous used passwords.</p>
                  <div className="d-flex flex-column mb-3">
                    <label for="newPassword" className={`form=label mb-2 ${classes.labeltext}`}>New Password</label>
                    <div class="input-group">
                      <input type="password" class={`form-control ${classes.forminput}`} id="newPassword" ref={refPassword} placeholder="Your New Password" required />
                    </div>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <label for="confirmNewPassword" className={`form=label mb-2 ${classes.labeltext}`}>Confirm New Password</label>
                    <div class="input-group">
                      <input type="password" class={`form-control ${classes.forminput}`} id="confirmNewPassword" ref={refConfirmPassword} placeholder="Confirm Your New Password" required/>
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
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
