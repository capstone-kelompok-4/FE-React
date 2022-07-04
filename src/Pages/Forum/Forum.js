import classes from "./Forum.module.css";
import React from 'react'
import CommentIcon from "../../Assets/Icons/comment_icon.svg";
import Card from '../../Components/Card/Card';
import Input from '../../Components/Input/Input';
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/Navigation/SideNav'

function Forum() {
  const data = [
    {
      profilePicture: "http://loremflickr.com/640/480",
      author: "Dave Christian",
      times: "6h ago",
      specialist: "UI/UX Research & Design",
      thread: `
      Hi mates!
      So I talked with mentor and because we are approaching the end of the mini project, 
      we have to collect certificates that have completed all courses to be evaluated and sent to the campus. 
      `,
      comment: "12"
    },
    {
      profilePicture: "http://loremflickr.com/740/480",
      author: "Daniel Adra",
      times: "1d ago",
      specialist: "UI/UX Research & Design",
      thread: `
      Hi mates!
      Semalam aku belajar tentang Conceptual Models dan aku menyadari beberapa hal penting kenapa kita perlu memahaminya. 
      Bagaimana pendapat kalian, apa ada yang sudah tau apa itu Conceptual Models?
      `,
      comment: "6",
    },
    {
      profilePicture: "http://loremflickr.com/840/480",
      author: "Ataya Kania",
      times: "1d ago",
      specialist: "UI/UX Research & Design",
      thread: `
      Hi guys!
      I want to share my experience applying job UI Design Intern. 
      Basicly after you’ve passsed CV Screening, you’ll asked to designing some design task for 3 days and luckily i was able to finish on time. I hope the result is good.
      `,
      comment: "10",
    }
  ]
  return (
    <>
      <SideNav/>
      <div className="row" style={{marginLeft: '75px'}}>
        <div style={{margin: "40px"}}>
          <h2 className={classes.title}>FORUM ALTERRA</h2>
        </div> 
      </div>
      <div className="row" style={{marginLeft: "75px"}}>
        <div className="p-0 col-xl-9 col-lg-8 col-md-12">
          <div style={{margin: "40px"}}>
            <div className="d-flex flex-column align-items-center mx-5">
              <Card className={classes.card}>
                <div className="row align-items-center">
                  <div className="col-1 p-0 text-center">
                    <img src="http://loremflickr.com/640/480" alt="randomImage" width="50px" height="50px" style={{borderRadius: "50%"}} />
                  </div>
                  <div className="col-11 p-0">
                    <div className={classes.inputForm}>
                      <Input type="text" placeholder='Tulis thread mu disini...'/>
                    </div>
                  </div>
                </div>
              </Card>
              {data.map((data, idx) => {
                return(
                  <Card className={classes.card} key={idx}>
                    <div className="row">
                      <div className="col-1 p-0 text-center">
                        <img src={data.profilePicture} alt="randomImage" width="50px" height="50px" style={{borderRadius: "50%"}} />
                      </div>
                      <div className="col-11 p-0">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className={classes.left}>
                            <h6 className='m-0 fw-bold'>{data.author}</h6>
                          </div>
                          <div className={classes.right}>
                            <p className='m-0' style={{color: "grey"}}>{data.times}</p>
                          </div>
                        </div>
                        <div style={{margin: "10px 0"}}>
                          <button className={classes.btn}>{data.specialist}</button>
                        </div>
                        <div style={{margin: "20px 0"}}>
                          <p className="m-0" style={{fontWeight: "500", fontSize: "18px"}}>
                            {data.thread}
                          </p>
                        </div>
                        <div>
                          <p className='m-0 text-end' style={{color: "grey"}}>{data.comment} Comment</p>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom border-top py-3 my-3">
                      <p className='m-0'><img src={CommentIcon} alt="comment_icon" width="25px" height="25px" /> Comment</p>
                    </div>
                    <div className="row my-2" >
                      <div className={classes.inputForm}>
                        <Input type="text" placeholder="Tulis komentarmu disini..." />
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
        <div className="p-0 col-xl-3 col-lg-4 col-md-12">
          <div style={{margin: "40px 40px 40px 0"}}>
            <Card className={classes.card}>
              <h3 className="m-0">Sort Category</h3>
              <div className={classes.radioWrapper}>
                <div className={`form-check ${classes.formRadio}`}>
                  <input className={`form-check-input ${classes.accent}`} type="checkbox" name="category" id="radioButton1" />
                  <label className={`form-check-label ${classes.labelForCheck}`} htmlFor="radioButton1">
                    UI/UX Research & Design
                  </label>
                </div>
                <div className={`form-check ${classes.formRadio}`}>
                  <input className={`form-check-input ${classes.accent}`} type="checkbox" name="category" id="radioButton2"/>
                  <label className={`form-check-label ${classes.labelForCheck}`} htmlFor="radioButton2">
                    Mastering Front-End Development with React JS
                  </label>
                </div>
                <div className={`form-check ${classes.formRadio}`}>
                  <input className={`form-check-input ${classes.accent}`} type="checkbox" name="category" id="radioButton3" />
                  <label className={`form-check-label ${classes.labelForCheck}`} htmlFor="radioButton3">
                    Mastering Mobile Development with Flutter
                  </label>
                </div>
                <div className={`form-check ${classes.formRadio}`}>
                  <input className={`form-check-input ${classes.accent}`} type="checkbox" name="category" id="radioButton4"/>
                  <label className={`form-check-label ${classes.labelForCheck}`} htmlFor="radioButton4">
                    Be The Best Search Quality Engineer
                  </label>
                </div>
              </div>
              <button className={`m-auto ${classes.saveBtn}`}>Simpan</button>
            </Card>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Forum