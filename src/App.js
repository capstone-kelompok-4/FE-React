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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { login, logout } from "./Store/userSlice";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Forum from "./Pages/Forum/Forum";
import AccountPage from "./Pages/AccountPage/AccountPage"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubs = onAuthStateChanged(
      auth,
      (userAuth) => {
        if (userAuth !== null) {
          dispatch(
            login({
              username: userAuth.displayName,
              uid: userAuth.uid,
              profilePictureUrl: userAuth.photoURL,
            })
          );
        } else {
          dispatch(logout());
        }
      },
      (error) => {
        alert(error);
      }
    );
    return () => unsubs;
  }, [dispatch]);

  return (
    <>
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
            <Route path="/preview_course/:id" element={<PreviewCourse />}/>
            <Route path="/detail_course/:id" element={<DetailCourse/>} />
            <Route path="/request_form" element={<RequestForm/>} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/account" element={<AccountPage/>} />
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
