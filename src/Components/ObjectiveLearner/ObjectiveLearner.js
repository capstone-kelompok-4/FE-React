export default function ObjectiveLearner ({data}){
    return (
        <> 
        <div>
            <ul className="group gap-3">
                {
                    data.objective_learner?.map((objective, idx) => {
                        return(
                            <li style={{fontFamily: "Poppins", fontSize: "18px"}} key={idx}>{objective}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}