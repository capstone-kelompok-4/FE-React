import ListGroup from 'react-bootstrap/ListGroup'; 
import Card from '../Card/Card';
import classes from './StartCourse.module.css' 

export default function StartCourse({data, material}){
    console.log("material=>", material)
    
    return (
            <>
            <Card className={classes.card}> 
                <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                    <ListGroup.Item action href="/detail_course/1" className={classes.orange} style={{padding: "20px 40px"}} >
                        <h4>START COURSE</h4>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#TargetLearner" className={classes.white} style={{padding: "20px 40px"}} >
                        <p className={classes.item}>Target Learner</p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#ObjectiveLearning" className={`${classes.item} ${classes.white}`} style={{padding: "20px 40px"}}>
                        <p className={classes.item}>Objective Learning</p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#MethodologyLearning" className={`${classes.item} ${classes.white}`} style={{padding: "20px 40px"}}>
                        <p className={classes.item}>Methodology Learning</p>
                    </ListGroup.Item>
                </ListGroup>
             </Card>
            </>
  );
       
} 



  
  