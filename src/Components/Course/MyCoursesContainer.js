import React, { useState } from 'react'
import LoadingCourseCard from '../Loading/LoadingCourseCard';
import CourseCard from './CourseCard';
import classes from "./MyCoursesContainer.module.css"; 

function MyCoursesContainer({title, data, showMoreAble, showInfo, showProgressBar, className, searchTerm, loading}) {
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
        {!loading && data.length === 0 && <h5 className={`${classes.courseEmpty}`}>Oops...Anda belum memiliki course</h5>}
        {loading && [1, 2, 3, 4].map((e) => <LoadingCourseCard key={e}/>)}
        {!loading && data.slice(0, limit? limit : data.length).filter(course => {
          if(searchTerm === ""){
            return course
          } else if (course.course_take.name.includes(searchTerm)) {
            return course
          } return false
        }).map((course) => {
          return(
            <CourseCard 
              key={course.course_take?.id}
              course_id={course.course_take?.id}
              title={course.course_take?.name}
              progress={course.progress}
              img={course.course_take?.banner_url}
              rating={course.course_take?.rate}
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

export default MyCoursesContainer;