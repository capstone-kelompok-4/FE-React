import ListGroup from 'react-bootstrap/ListGroup'; 
import { Accordion } from 'react-bootstrap'; 
import classes from './StartCourse.module.css' 
import { Link } from 'react-router-dom';

export default function StartCourse({data, material}){
    
    console.log("material=>", material)
    
    return (
            <>
            {/* <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                <ListGroup.Item action href="#link1" className={`px-4 ${classes.orange}`} >

                    <h4>Start Course</h4>
                </ListGroup.Item> 
                {data.map((section, i) => {
                    return(
                <ListGroup.Item action onClick={alertClicked} className="px-4">
                    <p>Section {i +1}</p> 
                    <h5>{section.name}</h5>
                </ListGroup.Item>
                    )
                })}
            </ListGroup>   */}

            <div> 
            <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                <ListGroup.Item action href="detail_course/1" className={classes.orange} style={{padding: "16px 20px"}} >
                    <h4>START COURSE</h4>
                </ListGroup.Item>
                <ListGroup.Item action href="#link1" className={classes.white} style={{padding: "16px 20px"}} >
                    <p className={classes.item}>Participant</p>
                </ListGroup.Item>
                <Accordion defaultActiveKey="0">       
                    {data.map((section, i) => {
                        return( 
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>
                                    <p style={{margin: "0", padding: "0", fontFamily:"Poppins", fontSize: "16px", color: "#0D2341"}}>Section {i + 1} <br/> <strong>{section.name}</strong></p>
                                </Accordion.Header>
                                <Accordion.Body className={classes.material}>
                                    <Link to={`/`}>
                                        <p style={{fontFamily: "Poppins", margin: "0", color: "#0D2341"}}>Lorem ipsum</p>
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
                <ListGroup.Item action href="#link1" className={classes.white} style={{padding: "16px 20px"}} >
                    <p className={classes.item}>Data Report</p>
                </ListGroup.Item>
             </ListGroup>
             </div>
            </>
  );
       
} 



  
  