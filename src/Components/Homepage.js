import React,{useState,useRef} from 'react'
import {NavLink} from "react-router-dom"
import './home.css';
const Homepage = () => {
  return (
    <>

  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" >
    <div class="carousel-item active c-item " >
      <img src="c3.png" class="d-block w-100 c-img " alt="..."/>
    </div>
    <div class="carousel-item c-item" >
      <img src="c2.png" class="d-block w-100 c-img" alt="..." />
    </div>
    <div class="carousel-item c-item">
      <img src="c1.png" class="d-block w-100 c-img" alt="..." />
    </div>
    <div class="carousel-item c-item">
      <img src="c4.png" class="d-block w-100 c-img" alt="..." />
    </div>
    <div class="carousel-item c-item">
      <img src="c5.png" class="d-block w-100 c-img" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="row row-cols-1 row-cols-md-3 pt-4 bg-info">
  <div class="row ">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded ">
      <h4 class="p-3">Keep Shopping For</h4>
      <div class="container text-center p-3">
  <div class="row">
    <div class="col">
    <img src="p1.jpg" class="card-img-top" alt="watch"/>
    <p class="card-text">Waterproof Leather Skmei Watch</p>

    </div>
    <div class="col">
    <img src="p2.jpg" class="card-img-top" alt="Wardrobe"/>
    <p class="card-text">3 Door Portable Wardrobe</p>
    </div>  
  </div>
</div>
<div class="container text-center p-3">
  <div class="row">
    <div class="col">
    <img src="p3.jpg" class="card-img-top " alt="watch"/>
    <p class="card-text">Spring and summershoes</p>
    </div>
    <div class="col">
    <img src="p4.jpg" class="card-img-top" alt="watch"/>
    <p class="card-text">LouisWill Men Sunglasses</p>
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="row ">
  <div class="card shadow p-3 mb-5 bg-body-tertiary rounded ">
      <h4 class="p-3">Great offers on wide range of TVs for every room</h4>
      <div class="container text-center p-3">
  <div class="row">
    <div class="col">
    <img src="p5.jpg" class="card-img-top" alt="watch"/>
    <p class="card-text">Waterproof Leather Skmei Watch</p>

    </div>
    <div class="col">
    <img src="p6.jpg" class="card-img-top" alt="Wardrobe"/>
    <p class="card-text">3 Door Portable Wardrobe</p>
    </div>  
  </div>
</div>
<div class="container text-center p-3">
  <div class="row">
    <div class="col">
    <img src="p7.jpg" class="card-img-top " alt="watch"/>
    <p class="card-text">Spring and summershoes</p>
    </div>
    <div class="col">
    <img src="p8.jpg" class="card-img-top" alt="watch"/>
    <p class="card-text">LouisWill Men Sunglasses</p>
    </div>
  </div>
</div>
</div>
</div>
  <div class="row">
  <div class="card shadow p-3 mb-5 bg-body-tertiary rounded ">
      <h4 class="p-3">Under ₹899 | Bestselling Sunglasses</h4>
      <div class="container text-center p-3">
  <div class="row">
    <div class="col">
    <img src="p9.jpg" class="card-img-top" alt="watch"/>
</div>
</div>
</div>
</div>
  </div>
</div>
<h5 class="p-3">Starting ₹499 | headphones & speakers</h5>
<div class="container-fluid overflow-x-scroll pb-4" >
    <div class="row flex-row flex-nowrap" style={{width:"1300px"}}>
        <div class="col-3">
           <img src='p10.jpg' alt=''/>
        </div>
        <div class="col-3">
        <img src='p11.jpg' alt=''/>
        </div>
        <div class="col-3">
        <img src='p12.jpg' alt=''/>
        </div>
        <div class="col-3">
        <img src='p13.jpg' alt=''/>
        </div>
        <div class="col-3">
        <img src='p14.jpg' alt=''/>
        </div>
        <div class="col-3" style={{width:"600px"}}>
        <img src='p15.jpg' alt='' />
        </div>
        <div class="col-3">
        <img src='p16.jpg' alt=''/>
        </div>
        <div class="col-3">
        <img src='p17.jpg' alt=''/>
        </div>
        
    </div>
</div>
<div class='bg-info'>
<p>hello</p>
</div>
</>
  )
}

export default Homepage