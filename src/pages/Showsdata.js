 
 
                                       //Admins Page
               
import React from 'react'
import '../App.css'
import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'

import Increment from './Increment'
// import { Showsdata } from './Showsdata';
function Showsdata() {
  const[users, setusers] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(" http://localhost:8000/ShowsCreate").then((res)=>{
      return res.json();
    }).then((resp)=>{
      setusers(resp);
    }).catch((err)=>{
      alert("Login Failed due to :" +err.message)
    })
  },[]);

  const LoadUpdate=(id)=>{
    navigate('/ShowUpdate/'+id)
   }
  const LoadDetails=(id)=>{
    navigate('/Showsdetails/'+id)
  }
 


  const Remove = (id)=>{
    if(window.confirm("Do you want to Remove")){
        fetch(" http://localhost:8000/ShowsCreate/"+id,{
            method:"DELETE",
        }).then((res)=>{
            alert("Removed Successfully");
            window.location.reload();
        }).catch((err)=>{
            alert("Failed:" +err.message);
        });
    }
  }
  return (
    <div><diV class="tickets">
      <center><h2>OUR SHOWS</h2></center><br/><br/>
      
      <div class="container text-center">  
{users&&users.map((props) => (
  <div className='row align-items-start'key={props.id}>
  <p class="col-1">{props.date}</p>
  <p class="col-2">{props.Time}</p>
  <p class="col-2">{props.Place}</p>
  <p class="col-2">
  <Increment />
  </p><p class="col-1"><button type="button" >Buy Now</button></p>
  <p class="col-3"><button onClick={()=>{LoadUpdate(props.id)}} className='btn btn-success me-2'>Update</button>
  <button onClick={()=>{LoadDetails(props.id)}} className='btn btn-primary me-2'>Details</button>
  <button onClick={()=>{Remove(props.id)}} className='btn btn-danger me-2'>Remove</button>
  </p>
  


   <hr  />
  </div>
  ))}</div></diV></div>)}

export default Showsdata;
