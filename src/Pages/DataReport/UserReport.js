import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL, getToken, getUser } from '../../Configs/APIAuth';
import classes from "./UserReport.module.css";
import { CircularProgress } from '@mui/material';

function UserReport() {
  const {course_id} = useParams();
  const loggedInUser = getUser();
  const [loading, setLoading] = useState(false);
  const [courseTakenByCourseId, setCourseTakenByCourseId] = useState([]);
  useEffect(() => {
    // GET COURSE TAKEN BY COURSE ID
    setLoading(true);
    const token = getToken();
    var configGetCourseTakenByCourseId = {
      method: 'get',
      url: `${BASE_URL}/course-takens/courses/${course_id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    axios(configGetCourseTakenByCourseId).then(res => {
      setLoading(false);
      setCourseTakenByCourseId(res.data.data)
    }).catch(err => {
      setLoading(false);
      console.log(err)
    });
  }, [course_id])

  let myCourseTaken = courseTakenByCourseId.filter(courseTaken => courseTaken.user.name === loggedInUser.name);
  const allReports = myCourseTaken[0]?.reports;
  const sortedReports = allReports?.sort(function(a, b) { 
    return a.id - b.id;
  });
  console.log(sortedReports);
  
  return (
    <>
      <div style={{backgroundColor: "#D6DEEC", borderRadius: '20px', padding: "0"}}>
        {
          loading ? (
            <div className={classes.spinnerContain}>
              <CircularProgress style={{ width: "200px", height: "200px", color: "#FF6C00" }} />
            </div>
          ) : (
            <table className={classes.tableParticipant}>
              <thead>
                <tr>
                  <th width="40%">Grade Item</th>
                  <th width="30%">Calculated Weight</th>
                  <th width="30%">Score</th>
                </tr>
              </thead>
              <tbody>
                {sortedReports?.map((materialReport, idx) => {
                  return(
                    <>
                      {
                        (idx === 0 || idx === 3 || idx === 6 || idx === 9 || idx === 12) && 
                        <tr className={classes.sectionReport}>
                          <td width="40%">{materialReport.section_report.name}</td>
                          <td width="40%"></td>
                          <td width="30%"></td>
                        </tr>
                      }
                      <tr key={materialReport.material.id}>
                        <td width="40%">{materialReport.material.name}</td>
                        {
                          materialReport.material.type === "QUIZ" ? (
                            <td width="30%">80%</td>
                            ) : (
                            <td width="30%">10%</td>
                          )
                        }
                        <td width="30%">{materialReport.score}</td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          )
        }
      </div>
    </>
  )
}

export default UserReport