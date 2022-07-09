import { Button } from "react-bootstrap";
import classes from "./MethodologyLearner.module.css";

export default function  MethodologyLearner ({data}){
   // Convert to Pascal Case
   function toPascalCase(string) {
      return `${string}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
          new RegExp(/\s+(.)(\w*)/, 'g'),
          ($1, $2, $3) => `${$2.toUpperCase() + $3}`
        ).replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
    }
    return (
        <>
         <div className="container">
            <div className="row col-lg-10 col-md-12" >
               {
                  data.methodology_learnings?.map((methodology, idx) => {
                     return(
                        <div className="col-sm-6 p-3 row" key={idx}>
                           <Button variant="primary" size="lg" className={`shadow ${classes.btn}`}>
                              {toPascalCase(methodology)}
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