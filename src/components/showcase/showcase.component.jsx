import React from 'react';

import { Link } from 'react-router-dom';

import './showcase.styles.scss';

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase-wrapper'>
        <img src={require('../../assets/showerhead.jpg')} alt='Showerhead' />
        <div className='showcase-content'>
          <div className='container'>
            <span className='showcase-title title'>
              {'Introducing our Original'}
            </span>
            <span className='showcase-body title'>
              {'Monaki Home® Ionic Gold'}
            </span>
            <Link to='/products' className='shop-now-btn title'>
              {'>> SHOP NOW >>'}
            </Link>
            {/* <a href='#!' > */}

            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
