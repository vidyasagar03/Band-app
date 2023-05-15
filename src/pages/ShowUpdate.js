
                                   //UsersUpdate

import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

function ShowUpdate() {
    const{UserId}=useParams();

    useEffect(()=>{
        fetch("  http://localhost:8000/ShowsCreate/"+UserId).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setdate(resp.date);
            setTime(resp.Time);
            setPlace(resp.Place);
        }).catch((err)=>{
            alert("Show details failed due to:" +err.mesage)
        })
    },[])
    const[date, setdate] =useState("");
    const[Time, setTime] =useState("");
    const[Place, setPlace] =useState("");
    // const [Update, setUpdate] =useState("");
   

    const navigate = useNavigate();

    
   
    const handlesubmit =(event) =>{
       
        event.preventDefault();
        let user ={date,Time,Place};
    //    console.log(regobj);
    fetch("http://localhost:8000/ShowsCreate/", {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
     })
     .then((res) => {
  
           toast.success('Show Updated Successfully.');
           navigate('/ShowsCreate')
     
     })
     .catch((err) => {
        toast.error('Failed :' + err.message);
     });
    
    }
    return (
        <div>
           <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                        <h1>Shows Creation</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
          <div className="col-lg-12">
          <div className="form-group"> 
              <label>Date:</label>
              <input value={date} onChange={e=>setdate(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
          <div className="col-lg-12">
          <div className="form-group"> 
              <label>Time</label>
              <input value={Time} onChange={e=>setTime(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-12">
              <div className="form-group"> 
              <label>Place:</label>
              <input  value={Place} onChange={e=>setPlace(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
                            </div>
                            </div>
                            <div className="card-footer">
                            <button type="submit" className="btn btn-primary" >Update</button>
                          
                            </div>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default ShowUpdate
