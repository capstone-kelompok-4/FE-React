import { Link } from "react-router-dom"

export default function Training ({data}){
    return (
        <>
        <div style={{margin: "20px 40px"}}> 
            <section>
                <div className='row'>
                    <div className='col-md-8 col-lg-8 col-sm-12'  >
                        <h3 className=''>Webinar</h3>
                    </div> 
                    <div className='col-md-4 col-lg-4 col-sm-12 text-end' >
                        <Link to="" className="text-decoration-none text-dark fs-5" style={{fontWeight:"600" }}>Lihat Semua</Link>
                    </div>
                </div>       
            </section>
            <div className="container-fluid row justify-content-between p-0 m-0 " >
                {data.map((result, index)=>{
                    return ( 
                        <div className="card md-4 col-lg-4 px-3 py-3 bg-transparent"
                        style={{
                            width: "26rem",
                            border:"none"}}
                        key={index}
                        >
                            <img src={result.img} className="card-img-top px-0" width="250px" height="200px"  alt="trainingImg" style={{borderRadius: "20px 20px 0 0"}}/>
                            <div className="card-body p-0 py-3"> 
                                <p>{result.tgl}</p>
                                <h5 className="card-title">{result.title}</h5>
                            </div> 
                            <div className="p-0">
                                <Link to="#" className="text-decoration-none text-dark"> Read More</Link>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
        </>
    )
}