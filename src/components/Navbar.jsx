import React from 'react';
import Styles from './components.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className={Styles.Navbar}>
      <Link to=""><img src={"https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_140x.png?v=1600190052"}></img></Link>
      
      <div className={Styles.right}>
      <Link to="/about">About</Link>
      <Link to="/contactus">ContactUS</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/Products">Products</Link>
      </div>
     
    </div>
     <div className={Styles.Coupen}>
     EXTRA 10% OFF FINAL SALE | USE CODE : LAST CALL
   </div>
   </>
  )
}

export default Navbar