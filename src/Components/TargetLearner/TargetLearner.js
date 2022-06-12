import './TargetLearner.css'

export default function TargetLearner ({data}){ 
    console.log("target =>", data)
    return (
        <> 
        <div>
            <ul className="group gap-3"> 
        
            <li>{data.target_learner}</li> 

            </ul>
        </div>
        </>
    )
}