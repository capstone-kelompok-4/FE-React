import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'; 
import Card from '../Card/Card';
import classes from './StartCourse.module.css' 

export default function StartCourse({courseId}){   
    const [active, setActive] = useState("");
    const items = [
        {
            name: "Target Learner",
            href: "#TargetLearner"
        },
        {
            name: "Objective Learning",
            href: "#ObjectiveLearning"
        },
        {
            name: "Methodology Learning",
            href: "MethodologyLearning"
        }
    ]
    return (
        <>
        <Card className={classes.card}> 
            <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                <ListGroup.Item action href={`/preview_course/${courseId}/sections/1/detail_course/1`} className={classes.orange} style={{padding: "20px 40px"}} >
                    <h4>START COURSE</h4>
                </ListGroup.Item>
                {
                    items.map((item) => {
                        return(
                            <ListGroup.Item action href={item.href} className={classes.white} style={{padding: "20px 40px"}} >
                                <p className={classes.item} onClick={(e) => setActive(e.target.innerText)} style={{color: active === item.name ? "#FF6C00": null}}>{item.name}</p>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </Card>
        </>
    );
       
} 



  
  