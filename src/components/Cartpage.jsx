"use client"
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from './Cartpage.module.css'
import Link from 'next/link';
import Product from './Product';

const CartPage = ({cart, removeFromCart }) => {
  const [ setCart] = useState([]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartitem}>
              <Image src={item.image} alt={item.name} width={150} height={150} className={styles.cartitemimage} />
              <div className={styles.cartitemdetails}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className={styles.cartbtn}>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
                {/* <div className={styles.itemdes}>
                  <h6>More  Details:</h6>
                  <p>{item.description}</p>
                </div> */}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;


// // Cart.js
// import React from 'react';

// const Cart = ({ cart, removeFromCart }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.map(item => (
//         <div key={item.id}>
//           <p>{item.name} - ${item.price}</p>
//           <button onClick={() => removeFromCart(item)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
