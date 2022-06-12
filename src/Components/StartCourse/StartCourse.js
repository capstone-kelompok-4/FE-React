import ListGroup from 'react-bootstrap/ListGroup'; 
import { Accordion } from 'react-bootstrap'; 
import classes from './StartCourse.module.css' 

export default function StartCourse({data, material}){

    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };
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

            <div className=''> 
            <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
            <ListGroup.Item action href="#link1" className={`px-4 ${classes.orange}`} >
                    <h4>Start Course</h4>
                </ListGroup.Item>
             <Accordion defaultActiveKey="0"> 
             {data.map((section, i) => {
                    return( 
                <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                        <h5>{section.name}</h5></Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                 )
                })}
             </Accordion>
             </ListGroup>
             </div>
            </>
  );
       
} 



  
  