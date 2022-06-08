import axios from 'axios' 
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react' 
import { useNavigate } from "react-router";
// import './allcourse.css' 
import { ProgressBar } from 'react-bootstrap';


export default function Mycourse ({data}){  
    const navigate = useNavigate(); 
    const Kembali = () => {  }

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     axios.get(`https://fsw-api-grup4.herokuapp.com/api/v1/articles`,{
    //         params: {
    //             per_page: 4
    //          }
    //       })
    //     .then((result)=> {
           
    //         setData(result.data.data)
    //         console.log("datas=>",result.data.data) 
    //     })
    // },[])

    const now = 60; 
    const progress = <a style={{fontWeight:"700"}}>{now}%</a>;

    return ( 
         
        <div className='container-fluid row justify-content-center py-3 ' style={{ backgroundColor: "#D9D9D9"}}> 
            <section>
            <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-sm-12'  >
                    <h3 className=''>My Course</h3>
                </div> 
            </div>
            </div>
        </section>
         {data.map((result, id)=>{
             return (
                <div className="card md-3 m-3 py-3 px-3 " style={{width: "18rem", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"}}key={id}>
                <img src={result.img} className="card-img-top rounded-top" alt="..." width="250px" height="150px" style={{}}/>
                <div className="card-body">
                    <h5 className="card-title">{result.title}</h5>
                    
                </div> 
                <div className="card-body">
                <ProgressBar bgcolor="#0275d8" animated now={now} /> 
                <p>complete : {progress}</p>
                </div>
            </div>
             )
         })} 

        {/* <div className="btncenter">
            <button class="btn btn-primary mt-5 mb-5 btn-lg" type="button" onClick={Kembali}>
                <i className="bi bi-arrow-left-circle" /> Lihat Semua</button> 
        </div> */}
             
        </div>
    )
}