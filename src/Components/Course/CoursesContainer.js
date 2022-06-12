import React, { useState } from 'react'
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css"; 

function CoursesContainer({title, data, showMoreAble}) {
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
      <h3 className='text-start'>{title}</h3>
      <div className={classes.grid}>
        {data.slice(0, limit? limit:data.length).map((course) => {
          return(
            <CourseCard 
            id={course.id}
            title={course.title}
            progress={course.progress}
            img={course.img}
            />
          )
          
        })}
      </div>
      {showMoreAble &&
        <div className="text-center">
            <button className="btn btn-primary mt-5 mb-5 btn-lg" type="button" onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        </div>
      }
    </div>
  )
}

export default CoursesContainer