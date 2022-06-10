import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layouts/Layouts";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import CourseOverview from "./Pages/CourseOverview/CourseOverview"
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/forgot_password" exact element={<ForgotPassword />} />
          <Route path="/reset_password" exact element={<ResetPassword />} />
          <Route path="/course_overview" exact element={<CourseOverview />} />
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
