
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav.js';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shows from './pages/Shows';
import Contact from './pages/Contact';
import ShowsCreate from './pages/ShowsCreate';
import Login from './components/Login';
import Registration from './components/Registration';
import Showsdata from './pages/Showsdata'
import ShowUpdate from './pages/ShowUpdate'
import Showsdetails from './pages/Showsdetails'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
  
    <Router> 
     
    <div className="App"> 
    <ToastContainer></ToastContainer>
    <Nav />
    </div>
 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Gallery' element={<Gallery />}/>
      <Route path='/Shows' element={<Shows />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/ShowsCreate' element={<ShowsCreate />}/>
      <Route path='/Showsdata' element={<Showsdata />}/>
      <Route path ='/ShowUpdate/:UserId' element={<ShowUpdate />}/>
      <Route path ='/Showsdetails/:UserId' element={<Showsdetails />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Registration' element={<Registration />}/>
    </Routes>
    
    </Router>
  );
}

export default App;
