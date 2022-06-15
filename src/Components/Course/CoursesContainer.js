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
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.grid}>
        {data.slice(0, limit? limit:data.length).map((course) => {
          return(
            <CourseCard 
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
      {showMoreAble &&
        <div className="text-center">
            <button className="btn my-5 px-4 btn-lg" type="button" style={{backgroundColor: "#FF6C00", color: "#FFF", fontFamily: "Poppins", borderRadius: "10px", fontSize: "16px"}} onClick={handleReadMoreClick}>{isReadMoreShown ? "Lihat Lebih Sedikit":"Lihat Semua"}</button> 
        </div>
      }
    </div>
  )
}

export default CoursesContainer