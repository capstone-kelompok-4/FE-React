export default function ObjectiveLearner ({data}){
    return (
        <> 
        <div>
            <ul className="group gap-3">
            <li style={{fontFamily: "Poppins", fontSize: "18px"}}>{data.objective_learner}</li>
            </ul>
        </div>
        </>
    )
}