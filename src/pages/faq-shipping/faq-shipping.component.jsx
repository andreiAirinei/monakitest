import React from 'react';
import './faq-shipping.styles.scss';

const FaqShipping = () => {
  return (
    <div className='faq-shipping'>
      <div className='container'>
        <span className='title'>FAQ & Shipping</span>
        <span className='title'>Frequently Asked Questions</span>
        <p>
          <span className='question'>
            + Where can I buy the Monaki® Products?{' '}
          </span>
        </p>
        <p>
          Monaki® Products are exclusively available through this online store.
          That's why we can guarantee the best price - and cut out unnecessary
          margins for middlemen that raise the retail price.
        </p>
        <p>
          <span className='question'>
            + What about shipping costs and returns?
          </span>
        </p>
        <p>
          We offer FREE shipping worldwide, with tracking number. Returns are
          accepted within 14 days after you receive your order. Return costs are
          not covered.
        </p>
      </div>
    </div>
  );
};

export default FaqShipping;
