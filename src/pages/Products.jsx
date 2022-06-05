import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Styles from '../components/components.module.css';
import ProductItem from '../pages/ProductItem';
import { Link } from 'react-router-dom';

const Products = () => {
  //const [query,setQuery]=useState();
  const [data,setData]=useState([]);

  const handleClick= (e)=>{
    console.log(e.target.value);
    setQuery(e.target.value);
  }
//console.log(query);




useEffect(() => {
  const getData=async()=>{
  let res = await axios.get(`https://fakestoreapi.com/products`);
  console.log(res)
  setData(res.data);
  console.log(data);
  };
  getData();
  
}, [])


  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{marginTop:"50px" , width:"25%"}}>
      
  <button style={{marginBottom:"10px" , backgroundColor:"#c69c6d" , border:"none"}} 
  type="button" 
  class="btn btn-primary" 
  value="Mens"
  onClick={handleClick}
  >Mens</button>
   <br></br>
  <button style={{marginBottom:"10px", backgroundColor:"#c69c6d" , border:"none"}} 
  type="button" 
  class="btn btn-primary"
  value="Womens"
  onClick={handleClick}
  >Womens</button>
  <br></br>
  <button style={{marginBottom:"10px", backgroundColor:"#c69c6d" , border:"none"}} 
  type="button" 
  class="btn btn-primary"
  value="Unisex"
  onClick={handleClick}
  >Unisex</button>
  <br></br>
    </div>
    <div style={{width:"50%",height:"200px"}}><h1 style={{fontSize:"35px",marginTop:"25%"}}>Our Top products</h1></div>
    </div>


    <div className={Styles.container}>
     {data.map((e)=>{
       
      return (
        <>
        <div key={e.id} style={{ height:"400px",width:"80%",margin:"auto"}}>
        
        
        <img src={e.image}  style={{height:"280px",width:"80%",margin:"auto"}}/>
        <br></br>
        <div style={{height:"20%",fontSize:"15px"}}><p>{e.title}</p></div>
       <Link to={`/Product`}><button>more Details</button></Link>
        
         
        </div>
        </>
      )
     })}
    
    </div>
    </>
  )
}

export default Products;

//***************************************