import classes from "./TargetLearner.module.css";

export default function TargetLearner ({data}){ 
    return (
        <> 
        <div className={classes.targetLearner}>
            <ul className="group gap-3"> 
                {
                    data.target_learner?.map((target) => {
                        return(
                            <li>{target}</li> 
                        )
                    })
                }

            </ul>
        </div>
        </>
    )
}