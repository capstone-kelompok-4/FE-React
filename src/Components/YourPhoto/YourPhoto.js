import { Card, Button } from "react-bootstrap"
import Image from '../../Assets/Icons/alterra_logo.svg' 
import  './YourPhoto.css'
export default function YourPhoto(){
    return(
        <> 
        <h5 className="mb-3">Your Photo</h5>
        <section className=" container row mb-5 ">
        <div className="col-md-4">
            <Card >
                <Card.Img variant="top" className="photo" src={Image} />
            </Card> 
        </div>
        <div className="col-8 d-flex justify-content-center align-items-center ">
            
            <div style={{marginRight:"20px"}}>
            <Button className="buttonn">Delete</Button>{' '}
            </div>
            <div>
            <Button className="buttonn">Update</Button>{' '}
            </div>
        </div>
        </section>
        </>
    )
}