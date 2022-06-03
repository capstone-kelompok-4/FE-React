import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Components/Footer/Footer';
// import Navbar from './Components/Navigation/Navbar';
// import SideNav from './Components/Navigation/SideNav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </>
  );
}

export default App;
