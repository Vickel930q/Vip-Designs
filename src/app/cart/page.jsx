
// App.js
"use client"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cartpage';
import Checkout from '@/components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* <ProductList addToCart={addToCart} /> */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
      {/* <Checkout cart={cart} /> */}
    </div>
  );
};

export default App;

// // App.js
// "use client"
// import Image from 'next/image';
// import Header from '@/components/Header'
// import ProductList from '@/components/ProductList';
// import Cart from '@/components/Cartpage';
// import Checkout from '@/components/Checkout';
// import styles from './page.module.css'
// import React, { useState, useEffect } from 'react';

// // Define the CartItem component
// const CartItem = ({ item, removeFromCart }) => {
//   const [quantity, setQuantity] = useState(item.quantity);
//   const [cartItems, setCartItems] = useState([]);

//   // Function to increase the quantity
//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//     // Update the item in the cart
//     updateCart({ ...item, quantity: quantity + 1 });
//   };

//   // Function to decrease the quantity
//   const decreaseQuantity = () => {
//     setQuantity(quantity - 1);
//     // Update the item in the cart
//     updateCart({ ...item, quantity: quantity - 1 });
//   };

//   // Function to update the cart
//   const updateCart = (newItem) => {
//     const updatedCart = cart.map((item) =>
//       item.id === newItem.id ? newItem : item
//     );
//     setCart(updatedCart);
//   };

//   // Function to remove an item from the cart
//   const handleRemove = () => {
//     removeFromCart(item);
//   };

//   return (
//     <div className={styles.cartitem}>
//       <Image
//         src={item.image}
//         alt={item.name}
//         width={150}
//         height={150}
//         className={styles.cartitemimage}
//       />
//       <div className={styles.cartitemdetails}>
//         <h3>{item.name}</h3>
//         <p>Price: ${item.price}</p>
//         <p>Quantity: {quantity}</p>
//         <div className={styles.cartbtn}>
//           <button onClick={decreaseQuantity}>-</button>
//           <button onClick={increaseQuantity}>+</button>
//           <button onClick={handleRemove}>Remove</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Define the CartPage component
// const CartPage = ({ cart, removeFromCart }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to remove an item from the cart
//   const updateCart = (newCart) => {
//     setCartItems(newCart);
//   };

//   useEffect(() => {
//     updateCart(cart);
//     setCartItems(cart || []);
//   }, [cart]);

//   // Calculate the total price
//   const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div>
//       {cartItems.length === 0 && <p>Your cart is empty.</p>}
//       {cartItems.length > 0 && (
//         <div>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
//           ))}
//           <div className={styles.total}>
//             <p>Total: ${total}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// const CartPage = ({cartremoveFromCart }) => {
//     const [ cart, setCart] = useState([]);

//     const removeFromCart = (product) => {
//         const updatedCart = cart.filter(item => item.id !== product.id);
//         setCart(updatedCart);
//       };
  
//     return (
//       <div>
//         <h1>Shopping Cart</h1>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item) => (
//               <div key={item.id} className={styles.cartitem}>
//                 <Image src={item.image} alt={item.name} width={150} height={150} className={styles.cartitemimage} />
//                 <div className={styles.cartitemdetails}>
//                   <h3>{item.name}</h3>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <div className={styles.cartbtn}>
//                     <button onClick={() => removeFromCart(item)}>Remove</button>
//                   </div>
//                   {/* <div className={styles.itemdes}>
//                     <h6>More  Details:</h6>
//                     <p>{item.description}</p>
//                   </div> */}
  
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default CartPage;
  
  
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
  

// const App = () => {
//   const [cart, setCart] = useState([]);

//    (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (product) => {
//     const updatedCart = cart.filter(item => item.id !== product.id);
//     setCart(updatedCart);
//   };

//   return (
//     <div>
        
//         <div className={styles.fbg}>
//                 <Header />
//                 <div className="hero">
//                     <div className="hero-text">
//                        <h1>Shopping Cart</h1>
//                     </div>
//                 </div>
//             </div>
//       {/* <ProductList addToCart={addToCart} /> */}
//       <Cart cart={cart} removeFromCart={removeFromCart} />
//       <Checkout cart={cart} />
//     </div>
//   );
// };

// export default App;
