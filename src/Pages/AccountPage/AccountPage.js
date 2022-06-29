// import FormIdentity from '../../Components/EditProfile/EditProfile'
import SideNav from '../../Components/Navigation/SideNav'; 
import Footer from '../../Components/Footer/Footer'
import classes from "./AccountPage.module.css"
import Card from '../../Components/Card/Card';
// Icon 
import EditProfile from "../../Assets/Images/edit-profile.png";
import EditProfileActive from "../../Assets/Images/edit-profile-colored.png";
import ChangePassword from "../../Assets/Images/change-password.png";
import ChangePasswordActive from "../../Assets/Images/change-password-colored.png";
import Certificate from "../../Assets/Images/certificate.png";
import CertificateActive from "../../Assets/Images/certificate-colored.png";
import Logout from "../../Assets/Images/logout.png";

import { Link, Navigate, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { logout } from '../../Store/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../../Firebase/Firebase';
import { useState } from 'react';

export default function AccountPage(){
    const [active, setActive] = useState("Edit Profile");
    const buttons = [
        {
            id: 1,
            name: "Edit Profile",
            path: "edit_profile",
            icon: EditProfile,
            iconActive: EditProfileActive,
        },
        {
            id: 2,
            name: "Change Password",
            path: "change_password",
            icon: ChangePassword,
            iconActive: ChangePasswordActive,
        },
        {
            id: 3,
            name: "Certificate",
            path: "certificate",
            icon: Certificate,
            iconActive: CertificateActive,
        },
    ]

    const dispatch = useDispatch();
    const logoutHandler = () => {
        signOut(auth);
        dispatch(logout());
        <Navigate to="/login" />
    }
    return(
        <>
        <SideNav/>
        <section className='row' style={{marginLeft:"75px"}}> 
            <div className={classes.container}>
                <h2 className={classes.title}>PERSONAL INFORMATION</h2>
                <div className={classes.flexWrapper}>
                    <div className={classes.left}>
                        <Card className={classes.cardTop}>
                            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/283.jpg" alt="photoProfile" width="150px" height="150px" />
                            <h4>Dave Christian</h4>
                            <p>Designer</p>
                        </Card>
                        <Card className={classes.cardBottom}>
                            {
                                buttons.map((button) => {
                                    return(
                                        <button onClick={(e) => setActive(e.target.innerText)} style={{backgroundColor: active === button.name ? "#FFE2CC" : null}} key={button.id}>
                                            <img src={active === button.name ? button.iconActive : button.icon} alt="iconButton" width="30px" height="30px" /> 
                                            <Link to={button.path} style={{color: active === button.name ? "#FF6C00" : null}}>
                                                {button.name}
                                            </Link>
                                        </button>
                                    )
                                })
                            } 
                            <button onClick={logoutHandler}>
                                <img src={Logout} alt="iconButton" width="30px" height="30px" /> 
                                <p>Logout</p>
                            </button>
                        </Card>
                    </div> 
                    <div className={classes.right}>
                        <Outlet/>
                        {/* <FormIdentity/> */}
                    </div> 
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}