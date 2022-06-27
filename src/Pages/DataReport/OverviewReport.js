import React from 'react'
import classes from "./OverviewReport.module.css";

function OverviewReport() {
  const dataReports = [
    {
      courseName: "UI/UI Research & Design",
      score: "20.00",
    },
    {
      courseName: "Mastering Front-End Development with React JS",
      score: "20.00",
    },
    {
      courseName: "Mastering Mobile Development with Futter",
      score: "20.00",
    },
    {
      courseName: "Mastering Back-End with Java Spring Boot",
      score: "10.00",
    },
  ]
  return (
    <>
      <div style={{backgroundColor: "#D6DEEC", borderRadius: '20px', padding: "0"}}>
        <table className={classes.tableParticipant}>
          <thead>
            <tr>
              <th width="60%">Course Name</th>
              <th width="40%">Score</th>
            </tr>
          </thead>
          <tbody>
            {dataReports.map((report) => {
              return(
                <tr key={report.id}>
                    <td width="60%">{report.courseName}</td>
                    <td width="40%">{report.score}</td>
                  </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={classes.action}>
        <button className={classes.btn}>Unduh Report</button>
      </div>
    </>
  )
}

export default OverviewReport