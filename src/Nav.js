
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  let username =sessionStorage.getItem('username')
  const navigate =useNavigate();
  const logout =()=>{
    sessionStorage.clear()
    navigate('/');
    window.location.reload();

  }
  return (
    <div class="navb" data-bs-theme="dark">
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><img src='/images/Logo.png' alt='' width={'180px'} height={'50px'}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link " aria-current="page" to="/Home">HOME</Link>
        <Link className="nav-link" to="/Gallery">GALLERY</Link>
        <Link className="nav-link" to="/Shows">SHOWS</Link>
        <Link className="nav-link" to="/Contact">CONTACT</Link> 
       {username === 'sagar' && <><Link className="nav-link" to="/ShowsCreate">ShowsCreate</Link>
        <Link className="nav-link" to="/Showsdata">Showsdata</Link></>} </div></div>  
        <div class="name1"><i class="fa-solid fa-user"></i>{username}</div>
        {username === null && <> <Link className="nav-link " to="/Login">Login</Link> 
        <Link className="nav-link" to={'/Registration'}>Register</Link></>}
         {username !== null && <Link className='nav-link' onClick={logout}>Log-Out</Link>}
        
         
  
  </div>
</nav>
    </div>
  )
}

export default Nav
