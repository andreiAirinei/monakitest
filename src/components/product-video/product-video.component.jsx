import React from 'react';

import './product-video.styles.scss';

const ProductVideo = () => {
  return (
    <div className='wow fadeInUp video' data-wow-delay='0.4s'>
      <iframe
        src='https://www.youtube.com/embed/AM6pR9zLB9A?controls=0'
        title='showerheadFrame'
      ></iframe>
    </div>
  );
};

export default ProductVideo;
