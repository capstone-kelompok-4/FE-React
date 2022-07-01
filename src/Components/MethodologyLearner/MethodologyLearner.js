import { Button } from "react-bootstrap";
import classes from "./MethodologyLearner.module.css";

export default function  MethodologyLearner ({data}){
    return (
        <>
         <div className="container">
            <div className="row col-lg-10 col-md-12" >
               {
                  data.methodology_learning?.map((methodology) => {
                     return(
                        <div className="col-sm-6 p-3 row">
                           <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                              {methodology}
                           </Button>
                        </div>
                     )
                  })
               }
            </div>
        </div>
        </>
    )
}