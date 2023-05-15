
                                       //Users To Book Tickets

import React from 'react'
import '../App.css'
import { useState, useEffect} from "react";
import Increment from './Increment'
import { useNavigate } from 'react-router-dom'

// import { Showsdata } from './Showsdata';
const username=sessionStorage.getItem('username')
function Shows() {
  const navigate = useNavigate()
  const Buy=()=>{
    if((username ==="")||(username===null)){
      alert("Please Login");
    }
    else{
      alert("Your Tickets are sent to your mail")
      navigate('/Home')
    }
  }
  const[users, setusers] = useState(null)


  useEffect(()=>{
    fetch(" http://localhost:8000/ShowsCreate").then((res)=>{
      return res.json();
    }).then((resp)=>{
      setusers(resp);
    }).catch((err)=>{
      alert("Login Failed due to :" +err.message)
    })
  },[]);

  // const LoadUpdate=(id)=>{
  //   navigate('/UserUpdate/'+id)
  //  }
  // const LoadDetails=(id)=>{
  //   navigate('/Detail/'+id)
  // }
 

// let ProductCount=0;

  return (
    <div><diV class="tickets">
      <center><h2>OUR UPCOMING SHOWS</h2></center><br/><br/>
      
      <div class="container text-center">  
{users&&users.map((props) => (
  <div className='row align-items-start'key={props.id}>
  <p class="col-1">{props.date}</p>
  <p class="col-3">{props.Time}</p>
  <p class="col-2">{props.Place}</p>
  <p class="col-3">
  <Increment></Increment>
  </p>
  <p class="col-3"><button type="button" className='btn btn-primary me-2' onClick={Buy}>Buy Now</button>

  </p>

   <hr  />
  </div>
  ))}</div></diV></div>)}

export default Shows;
