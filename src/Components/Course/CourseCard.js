import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import classes from "./CourseCard.module.css";

function CourseCard({id, title, img, progress}) {
  return (
    <div  className="card" style={{width: "18rem", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"}}>
      <img src={img} className="card-img-top" alt="courseCardImg" width="250px" height="150px" style={{padding: "15px 15px 0 15px", borderRadius: "20px 20px 0 0"}}/>
      <div className="card-body text-start">
        <h5 className={classes.cardTitle}><a className='text-decoration-none text-dark' href= {`/preview_course/${id}`}>{title}</a></h5> 
      </div>
      <div className="card-body">
        <ProgressBar animated bgcolor="#0275d8" now={progress} /> 
        <p>Complete:  <span className='fw-bold'>{progress}%</span></p>
      </div>
    </div>
  )
}
  
export default CourseCard