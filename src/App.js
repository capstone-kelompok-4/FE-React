import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layouts/Layouts";
import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login"; 
import CourseOverview from "./Pages/CourseOverview/CourseOverview"
import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"; 
import PreviewCourse from "./Pages/PreviewCourse/PreviewCourse"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/ForgotPassword" exact element={<ForgotPassword />} />
          <Route path="/ResetPassword" exact element={<ResetPassword />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/CourseOverview" exact element={<CourseOverview />} />
        </Route>
          <Route path="/preview_course" exact element={<PreviewCourse />} />
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
