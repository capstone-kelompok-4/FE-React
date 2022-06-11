import { Button } from "react-bootstrap" 
import './MethodologyLearner.css'

export default function  MethodologyLearner (){
    return (
        <>
         <div className="mb-2 container">
             <div className="row">
                 <div className="col-sm-6 p-3 row">
                    <Button variant="primary" size="lg" className="shadow">
                    Large button
                    </Button>
                 </div>
                 <div className="col-sm-6 p-3 row">
                    <Button variant="primary" size="lg" className="shadow">
                    Large button
                    </Button>
                 </div> <div className="col-sm-6 p-3 row">
                    <Button variant="primary" size="lg" className="shadow">
                    Large button
                    </Button>
                 </div> <div className="col-sm-6 p-3 row">
                    <Button variant="primary" size="lg" className="shadow">
                    Large button
                    </Button>
                 </div>
             </div>
        </div>
        </>
    )
}