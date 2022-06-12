import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer} style={{marginLeft: "70px"}}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Link to="/">
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="100px" height="100px"/>
          </Link>
          <div className='d-flex' style={{columnGap: "30px"}}>
            <Link to="/">
              <h6 className='m-0'>Kebijakan Privasi</h6>
            </Link>
            <Link to="/">
              <h6 className='m-0'>Izin Usaha</h6>
            </Link>
          </div>
          <div className='d-flex align-items-center' style={{columnGap: "10px"}}>
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="25px" height="25px" />
            <p className='m-0'>2022 4vengers. All rights reserved.</p>
          </div>
        </div>

        <div className={classes.center}>
          <Link to="/">
            <h6>Tentang Coorporate</h6>
          </Link>
          <Link to="/">
            <h6>Cek Sertifikat</h6>       
          </Link>
          <Link to="/">
            <h6>FAQ</h6>       
          </Link>
        </div>

        <div className={classes.right}>
          <h4>Hubungi Kami</h4>
          <div>
            <h6>Jalan Raya Tidar, Nomor 32, Karangbesuki, </h6>
            <h6>Kota Malang, Jawa Timur. 65146. </h6>
          </div>
          <div className='d-flex align-items-center' style={{columnGap: "20px"}}>
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="40px" height="40px" />
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="40px" height="40px" />
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="40px" height="40px" />
            <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Footer