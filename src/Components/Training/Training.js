import { Link } from "react-router-dom";
import classes from "./Training.module.css";

export default function Training ({data}){
    return (
        <>
        <div className={classes.training}> 
            <section>
                <div className='row'>
                    <div className='col-md-8 col-lg-8 col-sm-12 mb-2'  >
                        <h3 className={classes.title}>Training</h3>
                    </div> 
                </div>       
            </section>
            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 g-3 my-0">
                {data.map((result, index)=>{
                    return ( 
                        <div className="col p-0" key={index}>
                            <div className="card h-100 md-4 col-lg-4 bg-transparent m-auto"
                            style={{
                                width: "24rem",
                                border:"none",
                                fontFamily: "Poppins",
                                color: "#0D2341"
                            }}
                            >
                                <img src={result.img} className="card-img-top px-0" width="250px" height="200px"  alt="trainingImg" style={{borderRadius: "20px 20px 0 0"}}/>
                                <div className="card-body p-0 py-3" > 
                                    <p className={classes.schedule}>{result.tgl}</p>
                                    <h6 className={`card-title ${classes.contentTitle}`}>{result.title}</h6>
                                </div> 
                                <div className={`p-0 ${classes.readMore}`}>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
        </>
    )
}