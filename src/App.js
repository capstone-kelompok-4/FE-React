import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layouts/Layouts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"; 
import CourseOverview from "./Pages/CourseOverview/CourseOverview"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/CourseOverview" exact element={<CourseOverview />} />
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
