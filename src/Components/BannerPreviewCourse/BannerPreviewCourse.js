import React from 'react'
import Card from '../Card/Card'
import classes from "./Banner.module.css";

import PrettyRating from "pretty-rating-react";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from 'react-icons/fa';



function Banner({data}) {

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: faStar, 

    },
  };
  const colors = {
   star: ['#d9ad26', ],
  }; 
console.log("rating=>",)

    return (
        <div className=''
            style={
                {height: "50vh", 
                backgroundColor: "#D9D9D9"}
        }>
          <div className='container d-flex justify-content-center'>
            <div className='col p-5  mt-5 text-center'>
                <div className='mb-3'>
                    <h1>{data.title}</h1>
                </div>
                <div className='container px-5'>
                    <p>{data.content}</p>
                </div>
                <div>
                <p>Rated :</p> 
                5.0
                  <PrettyRating rating={5} icons={icons.star} setColors={colors.star} />

            </div>
           </div>
          </div>

        </div>
    )
}

export default Banner
