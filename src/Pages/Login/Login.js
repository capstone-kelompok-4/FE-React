import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css"

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
        <div className="col">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h1 className="mb-5">
              Learning Management System Corporate to Upgrade Skills the
              Employee
            </h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum pretium quis quisque aliquam tortor ullamcorper cum.{" "}
            </h5>
          </div>
        </div>
        <div className="col" style={{ backgroundColor: "grey" }}>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              height: "100vh",
            }}
          >
            <h1 className="mb-5">Login</h1>
            <div className="d-flex flex-column">
              <label for="username" class="form-label">
                Your email
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  ref={refUsername}
                  style={{ width: "400px", height: "60px" }}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                Password
              </label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  ref={refPassword}
                  style={{ width: "400px", height: "60px" }}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3 ">
              <div class="form-check" style={{ paddingRight: "260px" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 ">
              <button
                type="button"
                class="btn"
                onClick={() => navigate("/")}
                style={{
                  background: "#D9D9D9",
                  width: "400px",
                  height: "60px",
                  borderRadius: "1rem",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </div>
            <div className="d-flex">
              <p>Forgotten your email or password?<span><a className={`nav-link ${classes.colorteks}`} href="/ForgotPassword">Reset</a></span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
