import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const[username,usernameUpdate] =useState('');
    const[password,passwordUpdate] =useState('');
    const usenavigate = useNavigate();
useEffect(()=>{
sessionStorage.clear();
},[])


    const proceedlogin =(event)=>{
   event.preventDefault();
   if(validate()){
    //  console.log('proceed')
    fetch("http://localhost:8000/users/" +username).then((res)=>{
      return res.json();
    }).then((resp)=>{
      //  console.log(resp);
       if((Object.keys(resp).length===0)){
        toast.error('Please Enter valid Username');
       }else{
        if(resp.password === password){
          sessionStorage.setItem('username',username)
           usenavigate('/')
        }else{
          toast.error('Please Enter valid Password');
        }
       }
    }).catch((err)=>{
      toast.error('Login Failed due to :'+err.message);
    })
   }
    }
    const validate=()=>{
        let result =true;
        if(username === '' || username === null){
          result = false;
          toast.warning('Please Enter Username');
          }
          if(password === '' || password === null){
            result = false;
            toast.warning('Please Enter Password');
            }
        return result;
    }
    return ( 
        <div class="log"><br />
     <div className="row">
      <div className="offset-lg-3 col-lg-6">
    <form onSubmit={proceedlogin} className="container">
      <div className="card">
      <div className="card-header">
     <h2>Log in Form</h2>
 </div>
     <div className="card-body">
     <div className="form-group">
    <label>User Name<span className="errmsg">*</span></label>
   <input  value={username} onChange={e=>usernameUpdate(e.target.value)} className="form-control"></input>
    </div>
    <div className="form-group">
        <label>Password<span className="errmsg">*</span></label>
      <input  value={password} onChange={e=>passwordUpdate(e.target.value)} type="password" className="form-control"></input>
    </div>
     </div>
      <div className="card-footer">
      <button type="submit" className="btn btn-primary">Login</button>
       <Link className="btn btn-success" to={'/Registration'}>New User</Link>
      </div>
      </div>
     </form>
     </div>  

     </div>
          
     </div>
     );
}
 
export default Login;