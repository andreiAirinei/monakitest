import React from 'react';

import './product-video.styles.scss';

const ProductVideo = () => {
  return (
    <div className='video'>
      <iframe
        src='https://www.youtube.com/embed/AM6pR9zLB9A?controls=0'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ProductVideo;
