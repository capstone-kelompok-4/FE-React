import React, { useState } from 'react'
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css"; 

function CoursesContainer({title, data, showMoreAble, showInfo, showProgressBar}) {
  const [limit, setLimit] = useState(8);
    const [isReadMoreShown, setIsReadMoreShown] =useState(false);
    const handleReadMoreClick =()=>{
      setIsReadMoreShown (prevState=>!prevState);
      if(isReadMoreShown){
          setLimit(8)
      }else{
          setLimit(null)
      }
    } 

  return (
    <div className={classes.coursesContainer} >
      <div className="d-flex justify-content-between align-items-center">
        <h3 className={classes.title}>{title}</h3>
        {showMoreAble &&
          <button type="button" style={{backgroundColor: "#FFF", color: "#FF6C00", fontFamily: "Poppins", borderRadius: "10px", fontSize: "16px", border: "1px solid #FF6C00", padding: "15px 25px"}} onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        } 
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0">
        {data.slice(0, limit? limit:data.length).map((course) => {
          return(
            <CourseCard 
            key={course.id}
            id={course.id}
            title={course.title}
            progress={course.progress}
            img={course.img}
            rating={course.rating}
            total_material={course.total_material}
            showInfo={showInfo}
            showProgressBar={showProgressBar}
            />
          )
          
        })}
      </div>
      
    </div>
  )
}

export default CoursesContainer