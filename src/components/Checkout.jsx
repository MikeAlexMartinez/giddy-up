import React from 'react';
import './Checkout.scss';

const Checkout = ({ children }) => {
  return (
    <div className="checkout-container">
      <div className="checkout-content">
        Checkout
        {children}
      </div>
      <div className="checkout-controls">
        button container
      </div>
    </div>
  );
};

export default Checkout;
