import React from 'react';
import { Link } from 'react-router-dom';

import './products-footer.styles.scss';

const ProductsFooter = () => {
  return (
    <div className='wow fadeIn products-footer'>
      <div className='products-footer-wrapper'>
        <div className='footer-left'>
          <div className='logo'>
            <Link to='/'>
              <img
                src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/monaki-logo_150x.png?v=1544692591'
                alt='Monaki Home Logo'
              />
            </Link>
          </div>
          <div className='copyright'>
            <p>Copyright 2019. All rights reserved.</p>
          </div>
        </div>
        <div className='footer-right'>
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
            <Link to='/terms-conditions'>Terms</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFooter;
