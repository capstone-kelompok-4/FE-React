import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import classes from "./EditProfile.module.css"

function EditProfile() {
  const user = {
    fullName: "Dave Christian",
    specialist: "Designer",
    email: "123456789@corporate.com",
    phoneNumber: "089321738813",
    detailAddress: "Jalan Kenanga Timur",
    country: "Indonesia",
    state: "DKI Jakarta ",
    city: "Jakarta Barat",
    zipCode: "12345",
  }

  const initialValues = {
    fullName: user.fullName,
    specialist: user.specialist,
    email: user.email,
    phoneNumber: user.phoneNumber,
    detailAddress: user.detailAddress,
    country: user.country,
    state: user.state,
    city: user.city,
    zipCode: user.zipCode,
  } 

  const baseError = {
    fullName: "",
    email: "",
    phoneNumber: "",
    detailAddress: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  }

  const [values, setValues] = useState(initialValues);
  const [errMsg, setErrMsg] = useState(baseError);
  const regexLetterOnly = /^[A-Za-z ]*$/;
  const regexNumberOnly = /^[0-9]*$/;
  const regexForEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    if(name === "fullName"){
      if(regexLetterOnly.test(value)){
        setErrMsg({
          ...errMsg, fullName: ""
        });
      } else {
        setErrMsg({
          ...errMsg, fullName: "Nama Harus Berupa Huruf"
        });
      }
    }

    if (name === "email"){
      if(regexForEmail.test(value)){
        setErrMsg({
          ...errMsg, email: ""
        });
      } else {
        setErrMsg({
          ...errMsg, email: "Email Tidak Sesuai"
        })
      }
    } 

    if (name === "phoneNumber") {
      if(regexNumberOnly.test(value)){
        setErrMsg({
          ...errMsg, phoneNumber: ""
        });
      } else {
        setErrMsg({
          ...errMsg, phoneNumber: "No Handphone Tidak Sesuai"
        });
      }
    }

    if (name === "zipCode") {
      if(regexNumberOnly.test(value)){
        setErrMsg({
          ...errMsg, zipCode: ""
        });
      } else {
        setErrMsg({
          ...errMsg, zipCode: "Zip Code Tidak Sesuai"
        });
      }
    }

    setValues({
      ...values,
      [name]: value,
    })

    // console.log(values);
  }

  const validateInput = (e) => {
    const {name, value} = e.target;
    setErrMsg(prev => {
      const stateObj = { ...prev, [name]: "" };
   
      switch (name) {
        case "fullName":
          if (!value) {
            stateObj[name] = "Nama Tidak Boleh Kosong !";
          }
          break;
   
        case "email":
          if (!value) {
            stateObj[name] = "Email Tidak Boleh Kosong !";
          } 
          break;

        case "phoneNumber":
          if (!value) {
            stateObj[name] = "No. Handphone Tidak Boleh Kosong !";
          } 
          break;

        case "detailAddress":
          if (!value) {
            stateObj[name] = "Alamat Tidak Boleh Kosong !";
          } 
          break;

        case "country":
          if (!value) {
            stateObj[name] = "Country Tidak Boleh Kosong !";
          } 
          break;

        case "state":
          if (!value) {
            stateObj[name] = "State Tidak Boleh Kosong !";
          } 
          break;

        case "city":
          if (!value) {
            stateObj[name] = "City Tidak Boleh Kosong !";
          } 
          break;
          
        case "zipCode":
          if (!value) {
            stateObj[name] = "Zip Code Tidak Boleh Kosong !";
          } 
          break;
   
        default:
          break;
      }
   
      return stateObj;
    });
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>Edit Profile</h2>
      <h6 className={classes.description}>Change or update your personal profile with valid information </h6>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id='fullName' name='fullName' value={values.fullName} onChange={handleInputChange} onBlur={validateInput} maxLength="30" required/>
        { errMsg.fullName && <p className={classes.errorMessage}>{errMsg.fullName}</p> }
        <label htmlFor="specialist">Specialist</label>
        <input type="text" id='specialist' disabled value={values.specialist} name='specialist' onChange={handleInputChange}/>
        <label htmlFor="email">Your Email</label>
        <input type="email" id='email' name='email' value={values.email} onChange={handleInputChange} onBlur={validateInput} required/>
        { errMsg.email && <p className={classes.errorMessage}>{errMsg.email}</p> }
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" id='phoneNumber' maxLength="12" name='phoneNumber' value={values.phoneNumber} onChange={handleInputChange} onBlur={validateInput} required/>
        { errMsg.phoneNumber && <p className={classes.errorMessage}>{errMsg.phoneNumber}</p> }
        <label htmlFor="detailAddress">Detail Address</label>
        <input type="text" id='detailAddress' name='detailAddress' value={values.detailAddress} onChange={handleInputChange} onBlur={validateInput} required/>
        <label htmlFor="country">Country</label>
        <input type="text" id='country' name='country' value={values.country} onChange={handleInputChange} onBlur={validateInput} maxLength="20" required/>
        <label htmlFor="state">State/Province</label>
        <input type="text" id='state' name='state' value={values.state} onChange={handleInputChange} onBlur={validateInput} maxLength="20" required/>
        <div className={classes.flexWrapper}>
          <div className={classes.left}>
            <label htmlFor="city">City</label>
            <input type="text" id='city' name='city' value={values.city} onChange={handleInputChange} onBlur={validateInput} maxLength="20" required/>
          </div>
          <div className={classes.right}>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="number" id='zipCode' name='zipCode' value={values.zipCode} onChange={handleInputChange} onBlur={validateInput} required/>
            { errMsg.zipCode && <p className={classes.errorMessage}>{errMsg.zipCode}</p> }
          </div>
        </div>
        <button className={classes.btnSave}>Save</button>
      </form>
    </Card>
  )
}

export default EditProfile