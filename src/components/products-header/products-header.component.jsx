import React from 'react';

import { Link } from 'react-router-dom';

import './products-header.styles.scss';

const ProductsHeader = () => {
  return (
    <div className='products-header'>
      <div className='logo'>
        <Link to='/'>
          <img
            src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/monaki-logo_150x.png?v=1544692591'
            alt='Monaki Home Logo'
          />
        </Link>
      </div>
      <div className='commercials'>
        <div className='comm1'>
          <img
            src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/security.png?v=1559136431'
            alt='Commercials'
          />
        </div>
        <div className='comm2'>
          <img
            src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/gr.png?v=1559136418'
            alt='Commercials'
          />
        </div>
        <div className='header-order-now'>
          <Link to='/cart' className='header-btn button-fill-left'>
            ORDER NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
