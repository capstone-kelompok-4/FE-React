import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layouts/Layouts";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import CourseOverview from "./Pages/CourseOverview/CourseOverview"
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import PreviewCourse from "./Pages/PreviewCourse/PreviewCourse"
import DetailCourse from "./Pages/DetailCourse/DetailCourse";
import RequestForm from "./Pages/RequestForm/RequestForm";
import FAQ from "./Pages/FAQ/FAQ";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./Firebase/Firebase";
// import { login, logout } from "./Store/userSlice";
// import PublicRoute from "./Components/PublicRoute/PublicRoute";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Forum from "./Pages/Forum/Forum";
import CheckCertificate from "./Pages/CheckCertificate/CheckCertificate";
import AccountPage from "./Pages/AccountPage/AccountPage"
import Participants from "./Pages/Participants/Participants";
import DataReport from "./Pages/DataReport/DataReport";
import OverviewReport from "./Pages/DataReport/OverviewReport";
import UserReport from "./Pages/DataReport/UserReport";
import EditProfile from "./Pages/AccountPage/EditProfile";
import ChangePassword from "./Pages/AccountPage/ChangePassword";
import Certificate from "./Pages/AccountPage/Certificate";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubs = onAuthStateChanged(
  //     auth,
  //     (userAuth) => {
  //       if (userAuth !== null) {
  //         dispatch(
  //           login({
  //             username: userAuth.displayName,
  //             uid: userAuth.uid,
  //             profilePictureUrl: userAuth.photoURL,
  //           })
  //         );
  //       } else {
  //         dispatch(logout());
  //       }
  //     },
  //     (error) => {
  //       alert(error);
  //     }
  //   );
  //   return () => unsubs;
  // }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route element={<PublicRoute/>}>
            <Route path="/login" exact element={<Login />} />
            <Route path="/forgot_password" exact element={<ForgotPassword />} />
            <Route path="/reset_password" exact element={<ResetPassword />} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/" exact element={<Home />} />
            <Route path="/course_overview" exact element={<CourseOverview />} />
            <Route path="/preview_course/:course_id" element={<PreviewCourse />}/>
            <Route path="/preview_course/:course_id/sections/:section_id/detail_course/:material_id" element={<DetailCourse/>} />
            <Route path="/preview_course/:course_id/participants" element={<Participants />} />
            <Route path="/preview_course/:course_id/data_report" element={<DataReport />}>
              <Route path="overview_report" element={<OverviewReport />}/>
              <Route path="user_report" element={<UserReport />}/>
            </Route>
            <Route path="/request_form" element={<RequestForm/>} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/account" element={<AccountPage/>}>
              <Route path="edit_profile" element={<EditProfile />} />
              <Route path="change_password" element={<ChangePassword />} />
              <Route path="certificate" element={<Certificate />} />
            </Route>
            <Route path="/check_certificate" element={<CheckCertificate/>} />
            <Route path="/faq" element={<FAQ/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
} 

function AppLayout() {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
}
export default App;
