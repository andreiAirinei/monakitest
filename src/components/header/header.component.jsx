import React, { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = () => {
  // SCROLL TO TOP FUNCTION
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
              <Link to='/cart'>
                {' '}
                <CartIcon></CartIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
