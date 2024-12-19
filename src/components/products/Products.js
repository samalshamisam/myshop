import React from 'react'
import {useLoaderData} from 'react-router-dom';
import "./products.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/appSilce';
const Products =() => {
    const data = useLoaderData()
    const products =data.data
    console.log(products);
    const dispatch =useDispatch();
  return (
    <div className='product-container'>
        {products.map((item) => (
        // <div key={item.id}>
        //  <p>{item.category}</p>
        //  <p>{item.description}</p>
        //  <img src={item.image} alt='' />
        // <p>{item.price}</p>
        // <p>{item.title}</p>
        //  <p>{item.rating.rate}</p>
        //  <p>{item.rating.count}</p>
        // </div>
        <div className='product-card' key={item.id}>
         <img src={item.image} alt='' className='image' />
        
         <div className='product-info'>
         <p className="title">{item.title.substring(0,16)}</p>
         <p className='description'>{item.description.substring(0,68)}</p>
       
            <div className='flex'>
            <p className='price'>${item.price} </p>
            </div>
            <p className='category'>{item.category}</p>
            <div className='count flex'>
            <p>({item.rating.count} revieme) </p>
            <p>{item.rating.rate}</p>
            </div>
            <button 
  onClick={() =>  
    dispatch(
      addToCart({
        id: item.id,
        img: item.image,
        price: item.price,
        category: item.category,
        title: item.title,
        desc: item.description,
        quantity: 1,
      })
    )
  } 
  className='add-to'>
  Add To Cart
</button>
         </div>
        </div>
    ))}
    </div>
  )
}

export default Products