import React from 'react'
import classes from "./UserReport.module.css";

function UserReport() {
  const dataReports = [
    {
      sectionName: "Fundamental of UI/UX",
      score: "100.00",
      id: "1",
      material: [
        {
          materialName: "Materi Fundamental of UI/UX",
          calculatedWeight: "10%",
          score: "10.00",
        },
        {
          materialName: "Video Fundamental of UI/UX",
          calculatedWeight: "10%",
          score: "10.00",
        },
        {
          materialName: "Quiz Fundamental of UI/UX",
          calculatedWeight: "10%",
          score: "10.00",
        },
      ]
    },
    {
      sectionName: "User Persona",
      score: "20.00",
      id: "2",
      material: [
        {
          materialName: "Materi User Persona",
          calculatedWeight: "10%",
          score: "10.00",
        },
        {
          materialName: "Video User Persona",
          calculatedWeight: "10%",
          score: "10.00",
        },
        {
          materialName: "Quiz User Persona",
          calculatedWeight: "10%",
          score: "00.00",
        },
      ]
    },
    {
      sectionName: "Interface Structure",
      score: "20.00",
      id: "3",
      material: [
        {
          materialName: "Materi Interface Structure",
          calculatedWeight: "10%",
          score: "10.00",
          id: "1"
        },
        {
          materialName: "Video Interface Structure",
          calculatedWeight: "10%",
          score: "10.00",
          id: "2"
        },
        {
          materialName: "Quiz Interface Structure",
          calculatedWeight: "10%",
          score: "00.00",
          id: "3"
        },
      ]
    },
    {
      sectionName: "Figma Introduction",
      score: "20.00",
      id: "4",
      material: [
        {
          materialName: "Materi Figma Introduction",
          calculatedWeight: "10%",
          score: "10.00",
          id: "1"
        },
        {
          materialName: "Video Figma Introduction",
          calculatedWeight: "10%",
          score: "10.00",
          id: "2"
        },
        {
          materialName: "Quiz Figma Introduction",
          calculatedWeight: "10%",
          score: "00.00",
          id: "3"
        },
      ]
    },
    {
      sectionName: "Usability Testing",
      score: "20.00",
      id: "5",
      material: [
        {
          materialName: "Materi Usability Testing",
          calculatedWeight: "10%",
          score: "10.00",
          id: "1"
        },
        {
          materialName: "Video Usability Testing",
          calculatedWeight: "10%",
          score: "10.00",
          id: "2"
        },
        {
          materialName: "Quiz Usability Testing",
          calculatedWeight: "10%",
          score: "00.00",
          id: "3"
        },
      ]
    },
    {
      sectionName: "UI/UX Writing",
      score: "20.00",
      id: "6",
      material: [
        {
          materialName: "Materi UI/UX Writing",
          calculatedWeight: "10%",
          score: "10.00",
          id: "1"
        },
        {
          materialName: "Video UI/UX Writing",
          calculatedWeight: "10%",
          score: "10.00",
          id: "2"
        },
        {
          materialName: "Quiz UI/UX Writing",
          calculatedWeight: "10%",
          score: "00.00",
          id: "3"
        },
      ]
    },
    {
      sectionName: "Building Portfolio",
      score: "20.00",
      id: "7",
      material: [
        {
          materialName: "Materi Building Portfolio",
          calculatedWeight: "10%",
          score: "10.00",
          id: "1"
        },
        {
          materialName: "Video Building Portfolio",
          calculatedWeight: "10%",
          score: "10.00",
          id: "2"
        },
        {
          materialName: "Quiz Building Portfolio",
          calculatedWeight: "10%",
          score: "00.00",
          id: "3"
        },
      ]
    },
  ]
  return (
    <>
      <div style={{backgroundColor: "#D6DEEC", borderRadius: '20px', padding: "0"}}>
        <table className={classes.tableParticipant}>
          <thead>
            <tr>
              <th width="40%">Grade Item</th>
              <th width="30%">Calculated Weight</th>
              <th width="30%">Score</th>
            </tr>
          </thead>
          <tbody>
            {dataReports.map((sectionReport) => {
              return(
                <>
                  <tr key={sectionReport.id} className={classes.sectionReport}>
                    <td width="40%">{sectionReport.sectionName}</td>
                    <td width="40%"></td>
                    <td width="30%">{sectionReport.score}</td>
                  </tr>
                  {
                    sectionReport.material.map((materialReport) => {
                      return(
                        <tr key={materialReport.id}>
                          <td width="40%">{materialReport.materialName}</td>
                          <td width="30%">{materialReport.calculatedWeight}</td>
                          <td width="30%">{materialReport.score}</td>
                        </tr>
                      )
                    })
                  }
                </>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={classes.action}>
        <button className={classes.btn}>Unduh Report</button>
        <button className={classes.btn}>Unduh Certificate</button>
      </div>
    </>
  )
}

export default UserReport