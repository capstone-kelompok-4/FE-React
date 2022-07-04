import React, { useState } from 'react'
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css"; 

function CoursesContainer({title, data, showMoreAble, showInfo, showProgressBar, className}) {
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
    <div className={`${classes.coursesContainer} ${className}`} >
      <div className="d-flex justify-content-between align-items-center">
        <h3 className={classes.title}>{title}</h3>
        {showMoreAble &&
          <button type="button" className={classes.btn} onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        } 
      </div>
      <div className="row row-cols-sm-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 my-0">
        {data.slice(0, limit? limit : data.length).map((course) => {
          return(
            <CourseCard 
              key={course.id}
              course_id={course.id}
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