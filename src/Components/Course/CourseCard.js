import React from 'react'
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import classes from "./CourseCard.module.css";
function CourseCard({title, img, progress, description}) {
  return (
    <div className="card" style={{width: "18rem", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"}}>
      <img src={img} className="card-img-top" alt="courseCardImg" width="250px" height="150px" style={{padding: "15px 15px 0 15px", borderRadius: "20px 20px 0 0"}}/>
      <div className="card-body text-start">
        <h5 className={classes.cardTitle}>{title}</h5>
        {/* <p className={classes.cardDescription}>{description}</p> */}
        <ProgressBar bgcolor="#0275d8" progress={progress}  height={15} />
        <p>Complete:  <span className='fw-bold'>{progress}%</span></p>
      </div>
    </div>
  )
}
  
export default CourseCard