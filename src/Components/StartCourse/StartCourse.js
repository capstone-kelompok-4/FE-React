import ListGroup from 'react-bootstrap/ListGroup'; 
import classes from './StartCourse.module.css'

export default function StartCourse(){

    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };
    
    
    return (
            <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                <ListGroup.Item action href="#link1" className={`px-4 ${classes.orange}`} >

                    <h4>Start Course</h4>
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked} className="px-4">
                    <p>blablabla</p> 
                    <h5>blablabla</h5>
                </ListGroup.Item>
            </ListGroup>
  );
       
} 



  
  