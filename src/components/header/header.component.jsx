import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as ShoppingIcon } from './shopping-cart.svg';

import './header.styles.scss';

const Header = props => {
  const handleClick = e => {
    e.preventDefault();
    console.log('wtf');
    props.history.push('/');
  };

  return (
    <div className='header-wrapper'>
      <div className='banner'>
        <p>This Week: FREE Shipping Worldwide!</p>
      </div>
      <div className='navbar container'>
        <div className='logo'>
          <Link to='/'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/monaki-logo_150x.png?v=1544692591'
              alt='Monaki Home Logo'
            />
          </Link>
        </div>
        <div>
          <ul className='title'>
            <li>
              <Link to='/faq-shipping' className='btn'>
                FAQ & Shipping
              </Link>
            </li>
            <li>
              <Link to='/about' className='btn'>
                About us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='btn'>
                Contact
              </Link>
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
