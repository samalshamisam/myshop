import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Increment, decrement , RemoveItem, clearCart} from './redux/appSilce';
import './cart.css';
const Cart = () => {
  const products =useSelector((State) => State.appReducer.products);
  const dispatch =useDispatch()
  
  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      <button className="clear" onClick={() => dispatch(clearCart())} >clear All products</button>
      <div className="car">  
        <div className="cart-products">
        {products.length > 0 ? (
          <>
            {products.map((item) => (
              <div key={item.id} className="cart-item">
              <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div>
                  <h2 className="cart-item-title">
                    {item.title.substring(0, 20)}
                  </h2>
                  <p className="cart-item-desc">
                    {item.desc.substring(0, 98)}
                  </p>
                  <p className="cart-item-price">${item.price}</p>
                  <p className="cart-cat">{item.category}</p>
                  <div className="flex">
                    <button
                      className="art"
                      onClick={() => dispatch(Increment(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="ar"
                      onClick={() => dispatch(decrement(item.id))}
                    >
                      -
                    </button>
                  </div>
                  <p>{item.quantity}</p>
                  <p>{item.quantity * item.price}</p>
                  <button className="remove" onClick={() => dispatch(RemoveItem(item.id))}>
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text"> No products</p>
        )}
      </div> </div>

    </div>
  )
}
export default Cart




// //    <div>
// {products.map((item) => (
        
//   <div>
// <button onClick={() => dispatch(clearCart())} >clear All products</button>
//    <p>{item.title}</p>
//    <img src={item.img} alt='' />
//    <p>{ item.price}</p>
//    <p>{item.category}</p>
//    <p>{item.desc}</p>
//    <button onClick={ () => dispatch(Increment(item.id))}>+</button>
//    <button onClick={ () => dispatch(decrement(item.id))}>-</button>
//   <p>{item.quantity}</p>
//   <p>{ item.quantity * item.price}</p>
//   <button onClick={() => dispatch(RemoveItem(item.id))}>RemoveItem</button>
//   </div>
// ))}
// </div>
// );
// }




















// return (
//   <div className="cart-container">
//     <h1 className="cart-header">your cart</h1>
//     <button onClick={() => dispatch(RemoveItem(item.id))}>RemoveItem</button>
//     <div className="cart-products">
//       {products.length > 0 ?(
//         <>
//         {""}
//         {products.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.img} alt={item.title}
//             className="cart-item-img" />
//             <div>
//               <h2 className="cart-item-title">
//                 {item.title.substring(0, 20)}
//               </h2>
//               <p className="cart-item-desc">
//                 {item.desc.substring(0,98)}
//               </p>
//               <p className="cart-item-price">
//                 ${item.price}
//               </p>
//               <p className="cart-cat">{item.category}</p>
//               <div className="flex">
//               <button className="art" onClick={ () => dispatch(Increment(item.id))}>+</button>
//               <button className="ar" onClick={ () => dispatch(decrement(item.id))}>-</button>
//               </div>
//               <p>{item.quantity}</p>
//               <p>{ item.quantity * item.price}</p>
//             </div>
//           </div>
//         ))}
//         </>
//       ))}
//     </div>
//   </div>
//     )