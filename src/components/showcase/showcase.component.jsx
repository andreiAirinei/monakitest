import React from 'react';
import './showcase.styles.scss';

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase-wrapper'>
        <img src={require('./showerhead.jpg')} alt='Showerhead' />
        <div className='showcase-content'>
          <div className='container'>
            <span className='showcase-title title'>
              {'Introducing our Original'}
            </span>
            <span className='showcase-body title'>
              {'Monaki Home® Ionic Gold'}
            </span>
            <a href='#' className='shop-now-btn title'>
              {'>> SHOP NOW >>'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
