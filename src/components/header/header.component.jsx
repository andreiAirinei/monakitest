import React from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-cart.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='banner'>
        <p>This Week: FREE Shipping Worldwide!</p>
      </div>
      <div className='navbar container'>
        <div className='logo'>
          <img
            src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/monaki-logo_150x.png?v=1544692591'
            alt='Monaki Home Logo'
          />
        </div>
        <div>
          <ul className='title'>
            <li>
              <a href='#'>FAQ & Shipping</a>
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <ShoppingIcon className='cart-icon'></ShoppingIcon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
