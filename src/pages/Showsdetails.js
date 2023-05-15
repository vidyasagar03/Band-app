import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'



 function Showsdetails() {
    const {UserId} = useParams();

    const[detail, setShowsdetails] = useState({});
    useEffect(()=>{
        fetch(" http://localhost:8000/ShowsCreate/"+UserId).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setShowsdetails(resp);
        }).catch((err)=>{
            alert("Login Failed due to :"+ err.message)
        })
    },[])
  return (
    <div className='container-fluid'>
        <div className='row'><div class='col-4'></div>
        {
            <div class = "col-4 m-4 card">
                <div class='card-body'>
                    <h5 class="card-subtitle">Date & Month:{detail.date}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Time:{detail.Time}</h6>
                    <h6 class="card-subtitle  mb-2 text-body-secondary">Place:{detail.Place}</h6>
                    <Link to="/Showsdetails" class="card-link btn btn-danger"></Link>
                    </div></div>
        }
        </div>
      </div>
  )
}
export default Showsdetails;