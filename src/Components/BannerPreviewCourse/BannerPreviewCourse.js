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
   star: ['#d9ad26', '#d9ad26', '#434b4d'],
  };
    return (
        <div classname='h-100 border'
            style={
                {height: "50vh"}
        }>
            <div className=' text-center'>
                <div>
                    <h1>Title</h1>
                </div>
                <div>
                    <p>Title</p>
                </div>
                <div>
                <h1>Assesment</h1>
                  <PrettyRating rating={5} icons={icons.star} setColors={colors.star} />
                </div>

            </div>

        </div>
    )
}

export default Banner
