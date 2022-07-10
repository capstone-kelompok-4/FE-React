import React from 'react'
import classes from "./BannerPreviewCourse.module.css";
import PrettyRating from "pretty-rating-react";
import BackIcon from "../../Assets/Icons/back_icon.svg";
import {} from 'react-icons/fa';
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';


function Banner({data}) {
  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    }
  };
  
  const colors = {
   star: ['#ff6c00', '#ff6c00', '#434b4d'],
  };

  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  }
  return (
    <div className='container d-flex justify-content-center h-100'>
      <div style={{padding: "20px", position: "absolute", top: "0", left: "0"}}>
        <img src={BackIcon} alt="back_icon" width="40px" height="40px" onClick={backHandler}/>
      </div>
      <div className='col p-5 m-auto text-center'>
        <div>
          <h1 className={classes.bannerTitle}>{data.name}</h1>
        </div>
        <div className='m-5'>
          <p className={classes.bannerDescription}>{data.description}</p>
        </div>
        <div>
            <p className={classes.bannerRating}>Rated :</p>
            <div className={classes.bannerRating}>
              <div className='d-flex align-items-center justify-content-center' style={{columnGap: "10px"}}>
                <PrettyRating icons={icons.star} colors={colors.star} value={data.rate} max="5"/> {data.rate}/5
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
