import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card';
import classes from "./Certificate.module.css";
import DownloadCertificate from "../../Assets/Images/download_icon.png";
import CertificateExample from "../../Assets/Images/certifacte-example.png";
import { BASE_URL, getToken } from '../../Configs/APIAuth';
import axios from 'axios';
import LoadingCertificate from '../../Components/Loading/LoadingCertificate';

function Certificate() {
  const [loading, setLoading] = useState(false);
  const [myCoursesData, setMyCoursesData] = useState([]);
  console.log(myCoursesData);

  const completedCourse = myCoursesData.filter((course) => course.progress === 100);
  console.log(completedCourse);
  useEffect(() => {
    setLoading(true);
    const token = getToken();
    var configGetCourseTaken = {
      method: 'get',
      url: `${BASE_URL}/course-takens/history`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(configGetCourseTaken).then(res => {
      setMyCoursesData(res.data.data.filter(data => data.status === "ACCEPTED"))
      setLoading(false);
    }).catch(err => setLoading(false));
  }, [])
  
  const handleDownloadCertificate = (course_take_id) => {
    const token = getToken();
    var configDownloadCertificate = {
      method: 'get',
      url: `${BASE_URL}/course-takens/download-certificates/${course_take_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
    };
    
    axios(configDownloadCertificate)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>Certificate</h2>
      <h6 className={classes.description}>Collect you completed courses or training certificate report in below.</h6>

      <div className="row row-cols-1 row-cols-md-3 g-5 my-4">
        {
          loading ? (
            [1,2,3].map((e) => <LoadingCertificate key={e} />)
          ) : (
            completedCourse.length === 0 ? (
              <>
                <div className='col p-0'>
                </div>
                <div className='col-10 p-0'>
                  <h4 className={classes.empty}>Anda belum memiliki certificate</h4>
                </div>
                <div className='col p-0'>
                </div>
              </>
            ) : (
              completedCourse.map((course) => {
                return(
                  <div className="col mb-5 mt-0" key={course.id}>
                    <div className={`card ${classes.certificateCard}`}>
                      <div className={classes.content}>
                        <img src={CertificateExample} className="card-img-top" alt="imageCertificate" width="150px" height="180px" style={{borderRadius: "10px"}}/>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{course.course_take?.name}</h5>
                        <img src={DownloadCertificate} alt="downloadCertificate" width="35px" height="35px" onClick={() => handleDownloadCertificate(course.id)} style={{cursor: "pointer"}}/>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          )
        }
      </div>

    </Card>
  )
  
}

export default Certificate