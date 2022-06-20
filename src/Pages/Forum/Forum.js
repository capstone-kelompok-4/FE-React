import axios from 'axios';
import classes from "./Forum.module.css";
import React, { useEffect, useState } from 'react'
import AddButton from "../../Assets/Images/addButton.png";
import CommentIcon from "../../Assets/Icons/comment_icon.svg";
import Card from '../../Components/Card/Card';
import Input from '../../Components/Input/Input';
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/Navigation/SideNav'
import OnlineBoard from '../../Components/OnlineBoard/OnlineBoard'

function Forum() {
  const [onlineUser, setOnlineUser] = useState([]);
  const baseURL = "https://62a160e6cc8c0118ef4a5d6c.mockapi.io";
  useEffect(() => {
    axios.get(`${baseURL}/online_user`).then(res => setOnlineUser(res.data)).catch(err => console.log(err.message));
  }, [])

  const data = [
    {
      profilePicture: "http://loremflickr.com/640/480",
      author: "Kevin Chris",
      times: "6h ago",
      thread: "Hi mates! So I talked with mentor and because we are approaching the end of the mini project, we have to collect certificates that have completed all courses to be evaluated and sent to the campus.",
      comment: "12"
    },
    {
      profilePicture: "http://loremflickr.com/640/480",
      author: "Daniel Adra",
      times: "1d ago",
      thread: "Hi! Previously there was an error in quiz number 5, I was already said to the mentor and he said he was asked to fill it out, if it was close, then wait for info from the admin.",
      comment: "8",
    }
  ]
  return (
    <>
      <SideNav/>
      <div className="row" style={{marginLeft: "75px"}}>
        <div className="p-0 col-xl-9 col-lg-8 col-md-12">
          <div style={{margin: "40px"}}>
            <h2 className={classes.title}>FORUM ALTERRA</h2>
          </div> 
          <div className="border rounded-3" style={{margin: "40px"}}>
            <div className="d-flex flex-column align-items-center m-5">
              <div style={{position: 'relative'}} className={classes.inputForm}>
                <Input type="text" placeholder='Add a new thread'/>
                <img src={AddButton} alt="addButton" width="50px" height="50px" style={{position: "absolute", right: "20px", top: "10%", cursor: "pointer"}}/>
              </div>
              {data.map((data) => {
                return(
                  <Card className={classes.card}>
                    <div className="row">
                      <div className="col-1 p-0 text-center">
                        <img src={data.profilePicture} alt="randomImage" width="50px" height="50px" style={{borderRadius: "50%"}} />
                      </div>
                      <div className="col-11 p-0">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className={classes.left}>
                            <h6 className='m-0'>{data.author}</h6>
                            <p className='m-0' style={{color: "#8EADDC"}}>{data.times}</p>
                          </div>
                        </div>
                        <div style={{margin: "20px 0"}}>
                          <p className='m-0'>
                            {data.thread}
                          </p>
                        </div>
                        <div>
                          <p className='m-0 text-end'>{data.comment} Comment</p>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom border-top py-3 my-3">
                      <p className='m-0'><img src={CommentIcon} alt="comment_icon" width="30px" height="30px" /> Comment</p>
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
          <div style={{margin: "40px auto", maxWidth: "380px"}}>
            <button className={classes.btn}>Cara Menggunakan Forum</button>
          </div>
          <OnlineBoard data={onlineUser} title="Latest Thread"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Forum