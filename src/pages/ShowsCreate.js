import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function ShowsCreate() {
    const[date,datechange] =useState("");
    const[Time,Timechange] =useState("");
    const[Place,Placechange] =useState("");
   

    const navigate = useNavigate();

    
    const Isvalidate = ()=>{
        let isproceed =true;
        let errormessage = 'Please enter the value in '
        if(date === null || date === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        if(Time === null || Time === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        // Add for Remaining to validation   


        if(!isproceed){
            toast.warning(errormessage)
        }
        return isproceed
    }

    const handlesubmit =(event) =>{
        if(Isvalidate()){
        event.preventDefault();
        let regobj ={date,Time,Place};
    //    console.log(regobj);
    fetch("http://localhost:8000/ShowsCreate/", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
     })
     .then((res) => {
        if (res.ok) {
           toast.success('Show Created Successfully.');
           navigate('/Showsdata')
        } else {
           throw new Error('Network response was not ok.');
        }
     })
     .catch((err) => {
        toast.error('Failed :' + err.message);
     });
    }
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
              <input value={date} onChange={e=>datechange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
          <div className="col-lg-12">
          <div className="form-group"> 
              <label>Time</label>
              <input value={Time} onChange={e=>Timechange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-12">
              <div className="form-group"> 
              <label>Place:</label>
              <input  value={Place} onChange={e=>Placechange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
                            </div>
                            </div>
                            <div className="card-footer">
                            <button type="submit" className="btn btn-primary" >Create</button>
                          
                            </div>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default ShowsCreate
