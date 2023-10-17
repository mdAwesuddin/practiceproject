import React,{useState,useRef} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // function addDismissAttribute() {
    //     const offcanvasElement = document.getElementById("offcanvasExample");
    //     if (offcanvasElement) {
    //         offcanvasElement.;
    //     }
    // }
  return (
    <>
    <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
    <img src="FV.png" alt="Logo" width="45" height="45" class="d-inline-block align-text-top"/>
    <a class="navbar-brand p-2 fw-semibold text-uppercase" href="#">
      Fashion Villa
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item ">
          <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample " >Categories</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">Sale</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">Best Deals</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
</nav>
 
<div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" data-bs-backdrop="false" aria-labelledby="offcanvasExampleLabel" >
    <div class="offcanvas-header">
      <img class="offcanvas-title" id="offcanvasExampleLabel" src='FV.png' alt='Logo'width="65" height="65" className='bg-dark rounded-3'/>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bg-dark">
        <div class="bg-white text-dark rounded-2">
        <h5 class="ps-3 px-3 pt-3">Shop By Category</h5>
        <div class="list-group list-group-flush px-3">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action text-start p-3">Men's Fashion</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
  <h6 class="ps-3 px-3 pt-3">Men's Clothing</h6>
  <NavLink to="/mens" className="list-group-item icon-link list-group-item-action bg-primary-subtle " id='tshirts'>T-Shirts</NavLink>
  <NavLink to="/mshirts" className="list-group-item icon-link list-group-item-action bg-primary-subtle " id='tshirts'>Shirts</NavLink>
  <NavLink to="/mjeans" className="list-group-item icon-link list-group-item-action bg-primary-subtle " id='tshirts'>Jeans</NavLink>
  <h6 class="ps-3 px-3 pt-3">Accessories</h6>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Watches</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Perfumes</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Sunglasses</a>
  <h6 class="ps-3 px-3 pt-3">Men's Shoes</h6>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Shoes</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action  text-start  p-3 ">Women's Fashion</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent1">
  <h6 class="ps-3 px-3 pt-3">Woman's Clothing</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Clothing</a>
  <h6 class="ps-3 px-3 pt-3">Accessories</h6>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Watches</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Perfumes</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Jewellery</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Sunglasses</a>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Handbags</a>
  <h6 class="ps-3 px-3 pt-3">Woman's Shoes</h6>
  <a href="#" class="list-group-item list-group-item-action bg-primary-subtle">Shoes</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action  text-start  p-3 ">Mobiles, Computers</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent2">
  <h6 class="ps-3 px-3 pt-3">Smartphones & Laptops</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Smartphones</a>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Laptops</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action text-start  p-3">Home, Lighting</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent3">
  <h6 class="ps-3 px-3 pt-3">Home & Lighting</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Decoration</a>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Lighting</a>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Furniture</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action text-start  p-3">Beauty, Grocery</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent4">
  <h6 class="ps-3 px-3 pt-3">Beauty</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Skincare</a>
  <h6 class="ps-3 px-3 pt-3">Grocery</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Groceries</a>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent5" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a href="#" class="list-group-item list-group-item-action text-start  p-3">Car, MotorBike</a></button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent5">
  <h6 class="ps-3 px-3 pt-3">Car & MotorBike</h6>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Automotive</a>
  <a href="#" class="list-group-item icon-link list-group-item-action bg-primary-subtle" id='tshirts'>Motorcycle</a>
 
</div>
<h5 class="ps-1 px-3 pt-4">Programs & Features</h5>
<div class="list-group list-group-flush px-3 ps-0 pe-0">
  <a href="#" class="list-group-item list-group-item-action ">Gift Cards</a>
  <a href="#" class="list-group-item list-group-item-action ">Flight Tickets</a>
  <a href="#" class="list-group-item list-group-item-action ">Handlooms and Handicrafts</a>
  <a href="#" class="list-group-item list-group-item-action ">Clearance Store</a>

</div>
<h5 class="ps-1 px-3 pt-4">Help & Settings</h5>
<div class="list-group list-group-flush px-3 ps-0 pe-0">
  <a href="#" class="list-group-item list-group-item-action ">Your Account</a>
  <a href="#" class="list-group-item list-group-item-action ">Customer Service</a>
  <a href="#" class="list-group-item list-group-item-action ">Sign in</a>
</div>
</div>
        </div>
    </div>
  </div>

  </>
  )
}

export default Navbar