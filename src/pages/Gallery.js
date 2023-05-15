import React from 'react'
import { carddata } from './carddata'

const Gallery = () => {
  return (<div class="gallery">
 <h2 class="head"> <center>OUR TEAM</center></h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
   
    {carddata.map((values) => (
      <div className='col' key={values.id}>
      <div class="card h-100 g-3">
      <img src={values.imgsrc} width={'100%'} height={'250px'} alt={values.des} />
       <div class="text">
        <div class="card-body">
       <h5 class="card-title">{values.des}</h5>
        <p class="card-text">{values.para}</p>
      </div></div>
    </div>
    </div>
   ))}

  </div></div>)}

export default Gallery;
