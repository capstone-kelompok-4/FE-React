import axios from 'axios';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'; 
import { BASE_URL, getToken } from '../../Configs/APIAuth';
import Card from '../Card/Card';
import CenteredSpinner from '../Loading/CenteredSpinner';
import classes from './StartCourse.module.css' 

export default function StartCourse({courseId}){   
    const [active, setActive] = useState("");
    const [sections, setSections] = useState([]);
    const [course, setCourse] = useState([]);
    const [courseTakens, setCourseTakens] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(courseTakens);

    const courseTaken = courseTakens.filter(courseTaken => courseTaken.course_take.name === course.name);

    console.log(courseTaken);
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

    useEffect(() => {
        setLoading(true)
        const token = getToken();
        var configGetCourseTakeByUsers = {
            method: 'get',
            url: `${BASE_URL}/course-takens/history`,
            headers: { 
              'Authorization': `Bearer ${token}`
            }
          };
        var configGetAllSections = {
            method: 'get',
            url: `${BASE_URL}/courses/${courseId}/sections/`,
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        };
        var configGetCourseById = {
            method: 'get',
            url: `${BASE_URL}/courses/${courseId}`,
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        };
        axios(configGetAllSections).then(res => {
            setSections(res.data.data)
        }).catch(err => console.log(err))
        axios(configGetCourseTakeByUsers).then(res => {
            setLoading(false);
            setCourseTakens(res.data.data)
        }).catch(err => console.log(err))
        axios(configGetCourseById).then(res => {
            setCourse(res.data.data)
        }).catch(err => console.log(err))
    }, [courseId])

    return (
        <>
        <Card className={classes.card}> 
            <ListGroup defaultActiveKey="#link1" className={classes.startcourse}>
                {
                    loading && <CenteredSpinner />
                }
                {
                    !loading && courseTaken[0]?.status === "ACCEPTED" &&
                    <ListGroup.Item action href={`/preview_course/${courseId}/sections/${sections[0]?.id}/detail_course/${sections[0]?.materials[0]?.id}`} className={classes.orange} style={{padding: "20px 40px"}} >
                        <h4>START COURSE</h4>
                    </ListGroup.Item>
                }
                {
                    !loading && courseTaken[0]?.status === "PENDING" &&
                    <ListGroup.Item action className={classes.grey} style={{padding: "20px 40px"}} >
                        <h4>WAITING APPROVAL</h4>
                    </ListGroup.Item>
                }
                {
                    !loading && courseTaken.length === 0 &&
                    <ListGroup.Item action href={`/preview_course/${courseId}/request_form`} className={classes.orange} style={{padding: "20px 40px"}} >
                        <h4>SEND REQUEST</h4>
                    </ListGroup.Item>
                }
                {
                    items.map((item, idx) => {
                        return(
                            <ListGroup.Item action href={item.href} className={classes.white} style={{padding: "20px 40px"}} key={idx} >
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



  
  