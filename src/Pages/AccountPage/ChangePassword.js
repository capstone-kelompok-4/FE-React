import axios from 'axios';
import React, { useState } from 'react'
import Card from '../../Components/Card/Card';
import { BASE_URL, getToken } from '../../Configs/APIAuth';
import classes from "./ChangePassword.module.css";
import { Alert } from "react-bootstrap";
import CenteredSpinner from '../../Components/Loading/CenteredSpinner';

function ChangePassword() {
  const baseError = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }

  const [values, setValues] = useState(initialValues);
  const [errMsg, setErrMsg] = useState(baseError);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const validateInput = (e) => {
    const {name, value} = e.target;
    setErrMsg(prev => {
      const stateObj = { ...prev, [name]: "" };
   
      switch (name) {
        case "currentPassword":
          if (!value) {
            stateObj[name] = "Please Enter Current Password.";
          }
          break;
   
        case "newPassword":
          if (!value) {
            stateObj[name] = "Please Enter New Password.";
          } else if (values.newPassword && value !== values.confirmPassword) {
            stateObj["newPassword"] = "New Password and Confirm Password does not match.";
          } else {
            stateObj["newPassword"] = values.confirmPassword ? "" : errMsg.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj["confirmPassword"] = "Please enter Confirm Password.";
          } else if (values.confirmPassword && value !== values.newPassword) {
            stateObj["confirmPassword"] = "New Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }
   
      return stateObj;
    });
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    validateInput(e);

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const token = getToken();
    var data = JSON.stringify({
      "current_password": values.currentPassword,
      "new_password": values.newPassword
    });

    var config = {
      method: 'put',
      url: `${BASE_URL}/users/change-password`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(res => {
      setLoading(false);
      setErr("");
      console.log(JSON.stringify(res.data));
      setMessage("Password Successfully Changed");
    })
    .catch( error => {
      setLoading(false);
      setMessage("");
      if(error.response.status === 401 || error.response.status === 400) {
        setErr(error.response.data.message);
      } else if (error.response.status === 500) {
        setErr("Password Invalid");
      } else {
        setErr("Something Went Wrong, Please Try Again Later");
      }
    })
    console.log(values);
  }
  
  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>Change Password</h2>
      <h6 className={classes.description}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</h6>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password" id='currentPassword' minLength="8" name="currentPassword" required value={values.currentPassword} onBlur={validateInput} onChange={handleInputChange}/>
        { errMsg.currentPassword && <p className={classes.errorMessage}>{errMsg.currentPassword}</p>}
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id='newPassword' minLength="8" name="newPassword" required value={values.newPassword} onBlur={validateInput} onChange={handleInputChange}/>
        { errMsg.newPassword && <p className={classes.errorMessage}>{errMsg.newPassword}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id='confirmPassword' minLength="8" name="confirmPassword" required value={values.confirmPassword} onBlur={validateInput} onChange={handleInputChange}/>
        { errMsg.confirmPassword && <p className={classes.errorMessage}>{errMsg.confirmPassword}</p>}
        
        {!loading &&
          <div className="d-flex flex-column" style={{width: "300px", fontFamily: "Poppins", fontSize: "14px", textAlign: "center"}}>
            {err && <Alert variant="danger">{err}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
          </div>
        }
        {loading && 
          <div className="d-flex flex-column mb-3 ">
            <CenteredSpinner />
          </div>
        }
        <button className={classes.btnSave}>Save</button>
      </form>
    </Card>
  )
}

export default ChangePassword