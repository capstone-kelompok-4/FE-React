import { Button } from "react-bootstrap";
import classes from "./MethodologyLearner.module.css";

export default function  MethodologyLearner (){
    return (
        <>
         <div className="container">
            <div className="row col-lg-10 col-md-12" >
               <div className="col-sm-6 p-3 row">
                  <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                  1 on 1 Session With Mentor
                  </Button>
               </div>
               <div className="col-sm-6 p-3 row">
                  <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                  Video Learning
                  </Button>
               </div> 
               <div className="col-sm-6 p-3 row">
                  <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                  Reading Materials
                  </Button>
               </div> 
               <div className="col-sm-6 p-3 row">
                  <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                  Quiz
                  </Button>
               </div>
               <div className="col-sm-6 p-3 row">
                  <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                  Flexible Learning
                  </Button>
               </div>
            </div>
        </div>
        </>
    )
}