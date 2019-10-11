import React from 'react';
import './about.styles.scss';

const AboutPage = () => {
  return (
    <div className='about'>
      <div className='about-wrapp'>
        <div className='title'>
          <span>About us</span>
        </div>
        <div className='about-flex'>
          <div className='info'>
            <p>
              Monaki was founded with the vision to create the highest quality
              products, for the best prices.
            </p>
            <p>
              Our company headquarters is located at:
              <br /> Amsteldijk 216, 1079LK in Amsterdam.
            </p>
            <p>
              Should you have any questions, feel free to <a href=''>Contact</a>{' '}
              us. We will do our best to respond within 12 hours.
            </p>
            <p>Team Monaki</p>
          </div>
          <div className='gmap'></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
