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
          <div className='d-flex' style={{columnGap: "30px"}}>
            <Link to="/">
              <p className='m-0'>Kebijakan Privasi</p>
            </Link>
            <Link to="/">
              <p className='m-0'>Izin Usaha</p>
            </Link>
          </div>
          <div className='d-flex align-items-center' style={{columnGap: "10px"}}>
            <img src={CopyrightIcon} alt="footerImage" width="20px" height="20px" />
            <p className='m-0'>2022 4vengers. All rights reserved.</p>
          </div>
        </div>

        <div className={classes.center}>
          <Link to="/">
            <p className='m-0'>Tentang Coorporate</p>
          </Link>
          <Link to="/">
            <p className='m-0'>Cek Sertifikat</p>       
          </Link>
          <Link to="/">
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
            <img src={require("../../Assets/Images/fb_img.png")} alt="footerImage" width="40px" height="40px" />
            <img src={require("../../Assets/Images/ig_img.png")} alt="footerImage" width="40px" height="40px" />
            <img src={require("../../Assets/Images/wa_img.png")} alt="footerImage" width="40px" height="40px" />
            <img src={require("../../Assets/Images/yt_img.png")} alt="footerImage" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Footer