import React from 'react'

import PrettyRating from "pretty-rating-react";
import {} from 'react-icons/fa';
import {
  faHeart,
  faStar,
  faHeartBroken,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";


function Banner({data}) {

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
    heart: {
      complete: faHeart,
      half: faHeartBroken,
      empty: farHeart,
    },
  };
  
  const colors = {
   star: ['#d9ad26', '#d9ad26', '#434b4d'],
   heart: ['#9b111e', '#a83f39'],
  };

console.log("rating=>",)

    return (
        <div className=''
          style={{
            height: "50vh", 
            backgroundColor: "#D9D9D9",
          }}
        >
          <div className='container d-flex justify-content-center'>
            <div className='col p-5  mt-5 text-center'>
                <div className='mb-3' style={{fontFamily: "Mulish"}}>
                    <h1>{data.title}</h1>
                </div>
                <div className='container px-5'>
                    <p style={{fontFamily: "Poppins"}}>{data.content}</p>
                </div>
                <div>
                <p style={{fontFamily: "Poppins"}}>Rated :</p>
                <div className='d-flex align-items-center justify-content-center' style={{columnGap: "10px"}}>
                <PrettyRating icons={icons.star} colors={colors.star} value={data.rating} max="5"/> {data.rating}
                </div>
            </div>
           </div>
          </div>

        </div>
    )
}

export default Banner
