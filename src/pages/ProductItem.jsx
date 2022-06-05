import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProductItem = () => {
  const [item,setItem] =useState({});
  const {id} =useParams();

  useEffect(() => {
    if(id){
      fetch(`https://fakestoreapi.com/products`)
      .then((r)=>r.json())
      .then((d)=>setItem(d));
      console.log(res)
    }
  
  }, [id])
  return (
    <div>
      Hello
          <img src={item.image} style={{border:"1px solid black" , width:"300px"}}/>

      
      </div>
  )
}

export default ProductItem