// ProductList.js
"use client"
import React from 'react';
import { useState } from 'react';
import styles  from './ProductList.module.css'
import Product from '@/components/Product';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Sofa', price: 500, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam quis nisl iaculis scelerisque.'},
    { id: 2, name: 'Chair', price: 200, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 3, name: 'Coffee Table', price: 300, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 4, name: 'Bed', price: 700, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 5, name: 'Dining Table', price: 600, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 5, name: 'Dining Table', price: 600, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 5, name: 'Dining Table', price: 600, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
    { id: 5, name: 'Dining Table', price: 600, image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1711577593~exp=1711581193~hmac=e2eb450dfbe17bd50fb292be6c81c338bca46a97f5f3c6b271fd2b96a5b6315f&w=740' },
  ];

  return (
    <div  className={styles.productlist}>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
