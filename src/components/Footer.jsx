import React from 'react';
import Styles from './components.module.css';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <>
    <div style={{
      position:"relative",
      display:"flex",
      lineHeight:"2",
       background:"White",
       justifyContent:"space-around",
       fontSize:"12px",
       paddingTop:"15px"
       , backgroundColor:'#f5f5f5'}}>
      <div style={{width:"22%"}}>
        <h1>TANNER GOODS</h1>
        <p>In a world where we are overwhelmed by products made to break down or go out style, we aim to go against that grain.</p>
      </div>
      <div style={{width:"22%"}}>
        <h1>SUPPORT</h1>
        <ul style={{}}>
          <li>CONTACT US</li>
          <li>Shipping</li>
          <li>Return & Exchange</li>
          <li>Replacement & Repair</li>
          <li>Careers</li>
        </ul>
      </div>
      <div style={{width:"22%"}}>
        <h1>SHOP</h1>
        <ul style={{}}>
          <li> Mazama</li>
          <li> Best Sellers</li>
          <li>New Arrival</li>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Bags</li>
          <li>Final Sale</li>
        </ul>
      </div>
      <div style={{width:"22%"}}>
        <h1>STAY IN THE LOOP</h1>
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
         <input placeholder={`Enter your Email `} />
         
         <div style={{display:"flex",fontSize:"50px" ,paddingLeft:"10px",marginLeft:"50px"}}>
         <IoLogoFacebook/><IoLogoInstagram/>
         </div>
         
      </div>

    
      
    </div>
    <p>@2022 TannerGoods | Terms | Privacy Policy</p>
    </>
  )
}

export default Footer










