import React from 'react';

import './product-advertisement.styles.scss';

const ProductAdvertisement = () => {
  return (
    <div className='advertise'>
      <div className='advertise-container'>
        <div className='wow fadeIn advertise-text'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            velit voluptatibus! Voluptatem vel sapiente velit iure.
          </p>
          <p>
            Dolorem laborum architecto totam alias doloribus cupiditate possimus
            necessitatibus voluptas voluptate. Molestias delectus voluptatum
            esse a rerum reprehenderit error tempore dolore magni! Rem sint.
          </p>
        </div>
        <div className='wow fadeInRight advertise-image1'></div>
      </div>
      <div className='advertise-container'>
        <div className='wow fadeInLeft advertise-image2'></div>
        <div className='wow fadeIn advertise-text text-high-italic'>
          <ul>
            <li>
              <img
                src={require('../../assets/left-arrow.png')}
                alt='icon-check'
              />
              Supreme Quality – Will Last Forever
            </li>
            <li>
              <img
                src={require('../../assets/left-arrow.png')}
                alt='icon-check'
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <img
                src={require('../../assets/left-arrow.png')}
                alt='icon-check'
              />
              35% Less Water Waste
            </li>
            <li>
              <img
                src={require('../../assets/left-arrow.png')}
                alt='icon-check'
              />
              Increases Water Pressure Drastically
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductAdvertisement;
