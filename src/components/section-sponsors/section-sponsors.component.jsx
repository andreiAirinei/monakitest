import React from 'react';
import './section-sponsors.style.scss';

const SectionSponsors = () => {
  return (
    <div className='sponsors-wrapper'>
      <div className='container'>
        <div className='sponsors-list'>
          <div className='sponsors-list-item'>
            <span className='feature-title'>As Featured On...</span>
          </div>
          <div className='sponsors-list-item'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/entrepeneur.png?v=1559133937'
              alt='Entrepreneur Magazine'
            />
          </div>
          <div className='sponsors-list-item'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/forbes.png?v=1559133945'
              alt='Forbes'
            />
          </div>
          <div className='sponsors-list-item'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/INC.png?v=1559133952'
              alt='Inc.'
            />
          </div>
          <div className='sponsors-list-item'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/fastcomany.png?v=1559133958'
              alt='Fast Company'
            />
          </div>
          <div className='sponsors-list-item'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/files/wired.png?v=1559133964'
              alt='Wired'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSponsors;
