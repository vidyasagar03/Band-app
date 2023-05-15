import React from 'react'
import './Contact.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
 
  const[name,namechange] =useState("");
  const[mail,mailchange] =useState("");
  const[number,numberchange] =useState("");
   const[message,messagechange] =useState("");
   let Username = sessionStorage.getItem("username")

 const navigate = useNavigate();
   const handlesubmit =(event) =>{
    event.preventDefault();
    let contact ={Username,name,mail,number,message};
//    console.log(regobj);
fetch("http://localhost:8000/contact/", {
    method: "POST",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(contact)
 }).then((res)=> {
  alert("Your message is submitted");
  navigate('/')
 }).catch((err)=> {
  alert("Failed to submit message")
 })

   };
  return (
    <div class="con">
    <div><br></br>
       <div class="container1" >
            <h1 class="cont">Contact</h1>
           <center> <hr /></center>
            <label for="name"><input type="text" id="name" value={name} onChange={e=>namechange(e.target.value)} placeholder="What's your name?" /></label>
            <label for="email"><input type="email" id="email" value={mail} onChange={e=>mailchange(e.target.value)} placeholder="Please enter your email"/></label>
            <label for="phone"><input type="number" id="phone" value={number} onChange={e=>numberchange(e.target.value)} placeholder="Phone number"/></label>
            <label for="message"><textarea name="message" id="mensaje" cols="30" rows="10" value={message} onChange={e=>messagechange(e.target.value)}  placeholder="Leave us a message."></textarea></label>
            <input type="submit" value="Send" onClick={handlesubmit}/>
        </div>
    </div></div>
  )
}

export default Contact;
