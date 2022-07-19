import React, { useState } from 'react'
import LoadingCourseCard from '../Loading/LoadingCourseCard';
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css"; 

function CoursesContainer({title, data, showMoreAble, showInfo, showProgressBar, className, searchTerm, loading}) {
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
          <button 
          type="button" 
          className={classes.btn} 
          style={{
            backgroundColor: isReadMoreShown ? "#FF6C00": "#FFF",
            color: isReadMoreShown ? "#FFF" : "#FF6C00"
          }}
          onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        } 
      </div>
      <div className={className}>
        {!loading && data.length === 0 && <h5 className={`${classes.courseEmpty}`}>Oops...Anda belum memiliki course</h5>}
        {loading && [1, 2, 3, 4].map((e) => <LoadingCourseCard key={e}/>)}
        {!loading && data.filter(course => {
          if(searchTerm === ""){
            return course
          } else if (course.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return course
          } return false
        }).slice(0, limit? limit : data.length).map((course) => {
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