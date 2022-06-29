import React, { useState } from 'react'
import Card from '../../Components/Card/Card';
import classes from "./ChangePassword.module.css";

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
        
        <button className={classes.btnSave}>Save</button>
      </form>
    </Card>
  )
}

export default ChangePassword