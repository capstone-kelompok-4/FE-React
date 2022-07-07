import React from 'react'
import Card from '../../Components/Card/Card';
import classes from "./Certificate.module.css";
import DownloadCertificate from "../../Assets/Images/download_icon.png";
import CertificateExample from "../../Assets/Images/certifacte-example.png";

function Certificate() {

  const certificates = [
    {
      id: 1,
      image: CertificateExample,
      title: "Be The Best Search Quality Engineer",
    },
    {
      id: 2,
      image: CertificateExample,
      title: "UI/UX Research & Design",
    },
    {
      id: 3,
      image: CertificateExample,
      title: "Mastering Front-end Developement with React JS",
    },
    {
      id: 4,
      image: CertificateExample,
      title: "Mastering Mobile Development with Flutter",
    },
  ]
  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>Certificate</h2>
      <h6 className={classes.description}>Collect you completed courses or training certificate report in below.</h6>

      <div className="row row-cols-1 row-cols-md-3 g-5 my-4">
        {
          certificates.map((certificate) => {
            return(
              <div className="col mb-5 mt-0" key={certificate.id}>
                <div className={`card ${classes.certificateCard}`}>
                  <div className={classes.content}>
                    <img src={certificate.image} className="card-img-top" alt="imageCertificate" width="150px" height="180px" style={{borderRadius: "10px"}}/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{certificate.title}</h5>
                    <img src={DownloadCertificate} alt="downloadCertificate" width="35px" height="35px" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </Card>
  )
  
}

export default Certificate