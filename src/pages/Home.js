import React from 'react'
import About from './About'

function Home() {
  return (
  <div>
   
          <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://rmc.dk/sites/default/files/styles/background_full_wide/public/node/field_image/rmc_uddannelse_music_management_0.jpg?h=d88fbc39&itok=qdS2rNsO" alt=".." width={"100%"} height={"750px"}/>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
            <img src="https://c0.wallpaperflare.com/preview/600/388/1006/group-of-people-enjoying-concerts.jpg" alt=".." width={"100%"} height={"750px"}/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
            <img src="https://wallpaperaccess.com/full/2142859.jpg" alt=".." width={"100%"} height={"750px"}/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button></div>
          <About/></div>  
    
  )
}

export default Home
{/* <img src='https://i.insider.com/5bad1bfbbe2012850f8b456c?width=1136&format=jpeg' width={'450px'} height={'350px'} /> */}
