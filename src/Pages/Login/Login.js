import React, { useState } from "react";
import classes from "./Login.module.css";
import leftPict from "../../Assets/Image/pict_login_page.png";
// import { useDispatch } from "react-redux";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Firebase/Firebase";
// import { login } from "../../Store/userSlice";
import { Alert } from "react-bootstrap";
import CenteredSpinner from "../../Components/Loading/CenteredSpinner";
import axios from "axios";
import { BASE_URL, setUserTokenSession } from "../../Configs/APIAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const loginHandler = () => {
    const data = JSON.stringify({
      "email": email,
      "password": password,
    })
    const config = {
      method: 'post',
      url: `${BASE_URL}/auth/signin`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }
    setError(null);
    setLoading(true);
    axios(config)
    .then( response => {
      setLoading(false);
      setUserTokenSession(response.data.data.token);
      console.log(JSON.stringify(response.data));
      navigate("/")
    }).catch( error => {
      setLoading(false);
      if(error.response.status === 401 || error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        console.log(error)
        setError("Something Went Wrong, Please Try Again Later");
      }

    })

    // signInWithEmailAndPassword(auth, email, password)
    // .then((userAuth) => {
    //   dispatch(
    //     login({
    //       username: userAuth.user.displayName,
    //       uid: userAuth.user.uid,
    //       profilePictureUrl: userAuth.user.photoURL,
    //     })
    //   );
    //   setLoading(false)
    // })
    // .catch((err) => {
    //   setError(err.message);
    //   setLoading(false);
    // });
  }

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
            <div className="border rounded-3 shadow">
              <div className="d-flex flex-column align-items-center m-5 p-5">
                <h1 className={`mb-4 ${classes.headingtext}`}>LOGIN</h1>
                <div className="d-flex flex-column">
                  <label htmlFor="email" className={`form-label mb-2 ${classes.labeltext}`}>
                    Your Email
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className={`form-control ${classes.forminput}`}
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="password" className={`form-label mb-2 ${classes.labeltext}`}>
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className={`form-control ${classes.forminput}`}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex flex-column mb-3 ">
                  <div className="form-check" style={{ paddingRight: "260px" }}>
                    <input
                      className={`form-check-input ${classes.checkbox}`}
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      />
                    <label className={`form-check-label ${classes.labeltext}`} htmlFor="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                </div>
                {!loading &&
                  <div className="d-flex flex-column" style={{width: "400px", fontFamily: "Poppins", fontSize: "14px"}}>
                    {error && <Alert variant="danger">{error}</Alert>}
                  </div>
                }
                {loading && 
                  <div className="d-flex flex-column mb-3 ">
                    <CenteredSpinner />
                  </div>
                }
                <div className="d-flex flex-column mb-3 ">
                  <button
                    type="button"
                    className={`btn ${classes.buttonreset}`}
                    onClick={loginHandler}
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
      </div>
    </div>
  );
}

export default Login;
