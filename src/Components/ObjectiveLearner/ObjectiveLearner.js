export default function ObjectiveLearner ({data}){
    return (
        <> 
        <div>
            <ul className="group gap-3">
                {
                    data.objective_learner?.map((objective) => {
                        return(
                            <li style={{fontFamily: "Poppins", fontSize: "18px"}}>{objective}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}