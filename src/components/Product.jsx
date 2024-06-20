// Product.js
"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Product.module.css'
import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price, image } = product;
  const [quantities, setQuantities] = useState({});
  

  const handleAddToCart = () => {
    addToCart(product);
    window.alert(`${product.name} has been added to your cart.`);
  };

  // Function to increase quantity for a product
  const increaseQuantity = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 0) + 1
    });
  };

  // Function to decrease quantity for a product
  const decreaseQuantity = (productId) => {
    if (quantities[productId] > 0) {
      setQuantities({
        ...quantities,
        [productId]: quantities[productId] - 1
      });
    }
  };


  return (
    <div className={styles.product} key={product.id}>
      <Image src={product.image} alt={product.name} width={200} height={200} className={styles.productimage} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <div className={styles.productbtn}>
        <div className={styles.cartbtn}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className={styles.qbtn}>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <span>{quantities[product.id] || 0}</span>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
        </div>

      </div>

    </div>
  );
};

export default Product;
