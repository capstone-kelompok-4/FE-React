import { Link } from "react-router-dom"

export default function Training ({data}){
    return (
        <>
        <div className=' py-3' style={{ backgroundColor: "#D9D9D9"}}> 
        <section>
            <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-sm-12'  >
                    <h3 className=''>Training</h3>
                </div> 
                <div className='col-md-4 col-lg-4 col-sm-12 text-end' >
                    <Link to="" className="text-decoration-none text-dark fs-5" style={{
                       fontWeight:"600" 
                    }}>Lihat Semua</Link>
                </div>
            </div>
            </div>
        </section>
        <div className="container-fluid row justify-content-center " >
            {data.map((result, index)=>{
                return ( 
                    <div class="card md-4 lg-4 m-3 px-3 py-3 bg-transparent container-fluid row justify-content-center"
                     style={{
                        width: "24rem",
                         border:"none"}}
                         >
                    <img src={result.img} class="card-img-top rounded-top px-0" width="250px" height="150px"  alt="..."/>
                    <div class="card-body p-0"> 
                        <p>{result.tgl}</p>
                        <h5 className="card-title">{result.title}</h5>
                    </div> 
                    <div className="p-0">
                    <Link to="#" className="text-decoration-none text-dark"> Read More
                    </Link>
                    </div>
                </div>
                )
                })} 
        </div>
        </div>
        </>
    )
}