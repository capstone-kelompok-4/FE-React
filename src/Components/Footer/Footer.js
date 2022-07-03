import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./Footer.module.css";
import CopyrightIcon from "../../Assets/Icons/copyright.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Link to="/">
            <img src={require("../../Assets/Images/footer_img.png")} alt="footerImage" width="200px" height="70px"/>
          </Link>
          <div className='d-flex align-items-center' style={{columnGap: "10px"}}>
            <img src={CopyrightIcon} alt="footerImage" width="20px" height="20px" />
            <p className='m-0'>2022 4vengers. All rights reserved.</p>
          </div>
        </div>

        <div className={classes.center}>
          <a href="https://academy.alterra.id/" target="_blanks">
            <p className='m-0'>Tentang Coorporate</p>
          </a>
          <Link to="/check_certificate">
            <p className='m-0'>Cek Sertifikat</p>       
          </Link>
          <Link to="/faq">
            <p className='m-0'>FAQ</p>       
          </Link>
        </div>

        <div className={classes.right}>
          <h4>Hubungi Kami</h4>
          <div>
            <p className='m-0'>Jalan Raya Tidar, Nomor 32, Karangbesuki, </p>
            <p className='m-0'>Kota Malang, Jawa Timur. 65146. </p>
          </div>
          <div className='d-flex align-items-center' style={{columnGap: "20px"}}>
            <a href='https://www.facebook.com/alterra.academy/' target="_blank" rel='noreferrer'>
              <img src={require("../../Assets/Images/fb_img.png")} alt="footerImage" width="40px" height="40px" />
            </a>
            <a href='https://www.instagram.com/alterra.academy/' target="_blank" rel='noreferrer'>
              <img src={require("../../Assets/Images/ig_img.png")} alt="footerImage" width="40px" height="40px" />
            </a>
            <a href='https://alta.id/whatsapp' target="_blank" rel='noreferrer'>
              <img src={require("../../Assets/Images/wa_img.png")} alt="footerImage" width="40px" height="40px" />
            </a>
            <a href='https://www.youtube.com/channel/UCG26drc4GLCMQTbYe4qt8-g' target="_blank" rel='noreferrer'>
              <img src={require("../../Assets/Images/yt_img.png")} alt="footerImage" width="40px" height="40px" />
            </a>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Footer