import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import './EditProfile.css'
import YourPhoto from '../YourPhoto/YourPhoto';

export default function FormIdentity (){
    return(
        <> 
        <section className='row mb-5'>
            <div className="container col-md-8 ">
                <h5 className='mb-3'>Edit Profil</h5>
                <div className='border p-3' style={{marginLeft:"20px"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control size='lg' placeholder="Jhon Doe"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control size='lg' placeholder="Designer" className='select'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail Address</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input" style={{width:"60%"}}/>
                </Form.Group>
                <Form.Group className="mb-3 row">
                    <div className='col-md-6'>
                    <Form.Label>City</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input" className='col-6' />
                    </div>
                    <div className='col-md-6'>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control size='lg' placeholder="Disabled input" className='col-6' />
                    </div>
                </Form.Group>
                </div>     
            </div> 
            <div className="container col-md-4"> 
            <div>
               <YourPhoto/>
            </div>
            <h5 className='mb-3'>Change Password</h5>
                <div className='border p-3 ' style={{marginLeft:"20px"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control size='lg' placeholder="Disabled input"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control size='lg' placeholder="Disabled input"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control size='lg' placeholder="Disabled input"/>
                    </Form.Group>
               
                </div>  
                <div className='container text-end '>
                    
                <Button className='button-cancel'>Cancel</Button>{' '}
                <Button className='button-save' style={{marginLeft:"20px"}}>Update</Button>{' '}
                </div>
            </div>
        </section>
        </>
    )
}