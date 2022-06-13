import classes from "./TargetLearner.module.css";

export default function TargetLearner ({data}){ 
    return (
        <> 
        <div className={classes.targetLearner}>
            <ul className="group gap-3"> 
        
                <li>{data.target_learner}</li> 

            </ul>
        </div>
        </>
    )
}