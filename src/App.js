import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar/Navbar.js';
import Home from './Home/Home.js';
import FavList from './FavList/FavList.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
