import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import classes from "./FAQ.module.css"

function FAQ() {
  return (
    <>
        <div className={`row my-auto mb-5 ${classes.banner}`}>
            <div className='d-flex justify-content-center my-5 py-2'>
                <h1 className={`${classes.sizeheading}`}>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
        </div>  
        <div className={`container-fluid mb-5`}>
            <div className='row'>
                <div className='d-flex justify-content-evenly'>
                    <div className={`col-lg-8 col-md-8 col-sm-8 p-5 ${classes.leftpagecontent}`}>
                        
                        <div className="d-flex justify-content-between">
                            <div className="nav flex-column me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className={`nav-link mb-4 ${classes.sidebar}`} href="#" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home">
                                    <h4>Account</h4>
                                </a>
                                <a className={`nav-link mb-4 ${classes.sidebar} `} href="#" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile">
                                    <h4>Panduan</h4>
                                </a>
                            </div>
                            <div className="tab-content w-75" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className={`accordion ${classes.dropdowncolor} `} id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    <span className={`${classes.colorteks} ${classes.dropdownheader} `}>Bagaimana jika saya tidak bisa login</span>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Kamu dapat mencoba sekali lagi dan apabila terus gagal, silahkan mengajukan perubahan kata santi dengan memilih tombol “Reset”. Setelah itu, Kamu bisa log in kembali menggunakan kata sandi yang baru.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span className={`${classes.colorteks} ${classes.dropdownheader} `}>Bagaimana cara keluar (logout) dari Alterra</span>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Kamu dapat logout dari alterra dengan menekan tombol logout yang tertera pada sidebar sebelah kiri halaman website alterra.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span className={`${classes.colorteks} ${classes.dropdownheader} `}>Bagaimana cara request counselling</span>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Kamu dapat menghubungi tim <strong>Customer Service</strong> melalui bubble chat Whatsapp yang tersedia atau dapat menghubungi melalui email kami dibawah.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className={`${classes.colorteks} ${classes.dropdownheader} `}>Bagaimana cara mengecek keaslian certificate</span>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Kamu dapat mengecek keaslian certificate melalui halaman menu <a className={`nav-link fw-bold ${classes.link} `} href='/check_ceritificate'>Cek Sertifikat</a> yang tertera pada footer halaman website Alterra.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span className={`${classes.colorteks} ${classes.dropdownheader} `}>Apakah saya dapat mengikuti course diluar spesialisasi</span>
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Kamu dapat mengikuti course diluar spesialisasi kamu dengan mengajukan request kepada customer service Alterra, pengajuan request dapat dilakukan dengan mengisi form pada menu <a className={`nav-link fw-bold ${classes.link} `} href='/request_form'>Request Form</a>. 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                        <div className={`border shadow ${classes.rightpagecontent}`}>
                            <div className='m-3 p-3'>
                                <p className={`${classes.sizetext}`}>Tidak menemukan yang kamu cari?</p>
                                <p className={`${classes.sizetext}`}>Hubungi tim <span className='fw-bold'>Customer Service</span> kami dibawah ini</p>
                                <div className="d-flex justify-content-center mt-5 ">
                                    <button type="button" className={`btn ${classes.buttoncontact}`}>
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default FAQ