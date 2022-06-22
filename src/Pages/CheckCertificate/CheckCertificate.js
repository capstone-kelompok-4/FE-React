import React from 'react'
import Footer from '../../Components/Footer/Footer'
import classes from "./CheckCertificate.module.css"

function CheckCertificate() {
  return (
    <>
        <div className={`row my-auto mb-5 ${classes.banner}`}>
            <div className='d-flex justify-content-center my-5 py-2'>
                <h1 className={`${classes.sizeheading}`}>CHECK A CERTIFICATE</h1>
            </div>
        </div> 

        <div className='container-fluid mb-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-md-5 col-sm-5 my-5'>
                    <div className={`mb-5`}>
                        <div className="input-group input-group-lg">
                            <input type="text" className={`form-control rounded-3 rounded-start ${classes.formcheck}`} placeholder="Enter certificate code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className={`btn px-3 ${classes.buttoncheck}`} type="button" id="button-addon2">CHECK CODE</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>


        <Footer/>
    </>
  )
}

export default CheckCertificate