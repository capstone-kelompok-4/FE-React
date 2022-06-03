import React from 'react'
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={`row ${classes.footer}`} style={{marginLeft: "70px"}}>
      <div className={`col-xl-5 col-lg-4 col-12 p-0 ${classes.left}`}>
        <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="100px" height="100px"/>
        <div className='d-flex' style={{columnGap: "30px"}}>
          <h6 className='m-0'>Kebijakan Privasi</h6>
          <h6 className='m-0'>Izin Usaha</h6>
        </div>
        <div className='d-flex align-items-center' style={{columnGap: "10px"}}>
          <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="25px" height="25px" />
          <p className='m-0'>2022 4vengers. All rights reserved.</p>
        </div>
      </div>

      <div className={`col-xl-3 col-lg-3 col-12 p-0 ${classes.center}`}>
        <h6 className='m-0'>Tentang Coorporate</h6>
        <h6 className='m-0'>Cek Sertifikat</h6>
        <h6 className='m-0'>FAQ</h6>
      </div>

      <div className={`col-xl-4 col-lg-5 col-12 p-0 ${classes.right}`}>
        <h4>Hubungi Kami</h4>
        <div>
          <h6>Jalan Raya Tidar, Nomor 32, Karangbesuki, </h6>
          <h6>Kota Malang, Jawa Timur. 65146. </h6>
        </div>
        <div className='d-flex align-items-center' style={{columnGap: "20px"}}>
          <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="50px" height="50px" />
          <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="50px" height="50px" />
          <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="50px" height="50px" />
          <img src="https://random.imagecdn.app/600/150" alt="footerImage" width="50px" height="50px" />
        </div>
      </div>
    </div> 
  )
}

export default Footer