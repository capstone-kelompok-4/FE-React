import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import leftPict from "../../Assets/Image/pict_login_page.png";

function Login() {
  const refUsername = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();
  // const submit = () => {
  //   userLogin({
  //     variables : {
  //       username : refUsername.current.value,
  //       password : refPassword.current.value
  //     }
  //   })
  // }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col ${classes.leftpage}`}>
          <div
            className={`d-flex flex-column align-items-start justify-content-center px-3 ${classes.layout}`}
          >
            <h1
              className={`mt-5 mb-4 px-5 ${classes.lefttextcolor} ${classes.sizeheading}`}
            >
              Learning Management System Corporate to Upgrade Skills The
              Employee
            </h1>
            <h5
              className={`mb-5 px-5 ${classes.lefttextcolor} ${classes.sizetext}`}
            >
              Tech talent incubator yang memberikan kesempatan bagi <br />
              banyak individu untuk menjadi tech talent profesional dan <br />
              berkualitas bahkan tanpa latar Pendidikan IT.
            </h5>
            <img className="px-5 m-auto" src={leftPict} alt="leftPict" />
            
          </div>
        </div>
        <div className={`col ${classes.rightpage}`}>
          <div
            className={`d-flex flex-column align-items-center justify-content-center ${classes.layout}`}
          >
            <h1 className={`mb-4 ${classes.headingtext}`}>Login</h1>
            <div className="d-flex flex-column">
              <label for="username" className={`form-label mb-2 ${classes.labeltext}`}>
                Your Email
              </label>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class={`form-control ${classes.forminput}`}
                  id="username"
                  ref={refUsername}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="username" className={`form-label mb-2 ${classes.labeltext}`}>
                Password
              </label>
              <div class="input-group">
                <input
                  type="password"
                  class={`form-control ${classes.forminput}`}
                  id="username"
                  ref={refPassword}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3 ">
              <div class="form-check" style={{ paddingRight: "260px" }}>
                <input
                  class={`form-check-input ${classes.checkbox}`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className={`form-check-label ${classes.labeltext}`} for="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 ">
              <button
                type="button"
                class={`btn ${classes.buttonreset}`}
                onClick={() => navigate("/")}
              >
                Login
              </button>
            </div>
            <p className={`${classes.smalltext}`}>
              Forgotten your email or password?
              <span>
                <a
                  className={`nav-link ps-2 ${classes.colorteks} ${classes.smalltext}`}
                  href="/forgot_password"
                >
                  Reset
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
