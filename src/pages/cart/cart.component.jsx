import React from 'react';
import { Link } from 'react-router-dom';

import './cart.styles.scss';

const Cart = () => {
  return (
    <div className='cart'>
      <div className='cart-wrapp'>
        <div className='title'>
          <span>Cart</span>
        </div>
        <div className='empty-cart'>
          <p>Your cart is currently empty.</p>
          <Link to='/'>Return to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
