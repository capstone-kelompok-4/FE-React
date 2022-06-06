import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from './Components/Layouts/Layouts';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

function AppLayout() {
  return(
    <Layouts>
      <Outlet/>
    </Layouts>
  )
}
export default App;