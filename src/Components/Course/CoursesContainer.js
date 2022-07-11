import React, { useState } from 'react'
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css"; 

function CoursesContainer({title, data, showMoreAble, showInfo, showProgressBar, className, searchTerm}) {
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
          <button type="button" className={classes.btn} onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        } 
      </div>
      <div className={className}>
        {data.length === 0 && <h5 className={`${classes.courseEmpty}`}>Oops...Anda belum memiliki course</h5>}
        {data.slice(0, limit? limit : data.length).filter(course => {
          if(searchTerm === ""){
            return course
          } else if (course.title.includes(searchTerm)) {
            return course
          } return false
        }).map((course) => {
          return(
            <CourseCard 
              key={course.id}
              course_id={course.id}
              title={course.name}
              progress={course.progress}
              img={course.banner_url}
              rating={course.rate}
              total_material={course.sections?.length}
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