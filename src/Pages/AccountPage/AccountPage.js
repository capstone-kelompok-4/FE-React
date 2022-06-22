import SideNav from '../../Components/Navigation/SideNav'; 
import FormIdentity from '../../Components/EditProfile/EditProfile'
import Footer from '../../Components/Footer/Footer'

export default function AccountPage(){
    return(
        <>
        <SideNav/>
        <section className='row' style={{marginLeft:"100px"}}> 
        <h2 className='my-5'>ACCOUNT SETTINGS</h2>
        <div className='container'>
            <FormIdentity/>
        </div> 
        </section>
        <Footer/>
        
        </>
    )
}