import React from 'react'
import CourseCard from './CourseCard';
import classes from "./CoursesContainer.module.css";

function CoursesContainer({title, data}) {
  return (
    <div className={classes.coursesContainer}>
      <h3 className='text-start'>{title}</h3>
      <div className={classes.grid}>
        {data.map((course) => {
          return(
            <CourseCard 
            key={course.id}
            title={course.title}
            progress={course.progress}
            img={course.img}
            description={course.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CoursesContainer