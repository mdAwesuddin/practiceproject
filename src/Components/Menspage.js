import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import { Bars } from  'react-loader-spinner'
import useApi from './useApi';

const term='mens t-shirt';
const key='9dfc9580f4mshb973238737cb728p1eff44jsnd0d5de0bc7df';
const Menspage = () => {
  
 const[post,isLoading]=useApi(term,key);


if(isLoading){
  return<div className="d-flex justify-content-center mt-10" id='loader'>
  <Bars height="70" width="70" color="#4fa94d" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true}/>
  </div>
 }
  return (
    <>
    <h4 class="p-4 ps-5 fs-3 fw-semibold bg-info">T-Shirts</h4>
    <div className='row row-cols-1 row-cols-md-3 g-4 p-4'>
    
    {post.map((eachproduct)=>{
      const {name,review_rating,price,link,image,is_bestseller}=eachproduct;
      return (
    <div class="col">
      <div class="card" style={{height:"35rem"}}>
        {is_bestseller?
        <p class="p-3 mb-2 bg-warning text-dark w-50">Best Seller</p>:null}
    <img src={image} class="card-img-top rounded mx-auto d-block pt-3" alt="image"  style={{height:"18rem",width:"15rem"}}/>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text" >Rating: {review_rating}⭐</p>
    <p class="card-text" >Price: ₹{price}</p>
    <a href={link} class="btn btn-primary">Buy Now</a>
    
  </div>
    </div>
    </div>
       )
    })} 
    
  </div>
  </>
  )
}

export default Menspage