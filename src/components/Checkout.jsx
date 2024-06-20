// Checkout.js
import React from 'react';

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
