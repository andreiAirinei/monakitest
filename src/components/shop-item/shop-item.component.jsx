import React from 'react';
import { Link } from 'react-router-dom';

import './shop-item.styles.scss';

const ShopItem = () => {
  return (
    <div className='shop-item'>
      <div className='shop-item-container'>
        <div className='product-image'>
          <div className='product-image-container'>
            <img
              src='//cdn.shopify.com/s/files/1/0037/8745/6612/products/v-3178592__-1005623596.jpg?v=1559136177'
              alt='Showerhead'
            />
            <div className='bubble'>
              <div className='animated bounceInUp bubble-content'>70% OFF</div>
            </div>
          </div>
        </div>
        <div className='product-details'>
          <span className='product-title'>Monaki® Home Original</span>
          <span className='product-title2'>
            Gold Ionic High-Pressure Showerhead
          </span>
          <span className='product-label'>#1 Best Seller</span>
          <ul className='animated fadeIn product-checks'>
            <li>
              <img
                src={require('../../assets/icon-checked.png')}
                alt='icon-check'
              />
              Gorgeous Gold or Silver Finish
            </li>
            <li>
              <img
                src={require('../../assets/icon-checked.png')}
                alt='icon-check'
              />
              35% Less Water Waste
            </li>
            <li>
              <img
                src={require('../../assets/icon-checked.png')}
                alt='icon-check'
              />
              Increases Water Pressure Drastically
            </li>
            <li>
              <img
                src={require('../../assets/icon-checked.png')}
                alt='icon-check'
              />
              Supreme Quality – Will Last Forever
            </li>
          </ul>
          <div className='testimonial'>
            <div className='testimonial-image'></div>
            <div className='testimonial-message'>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              totam aperiam ea fugiat sapiente, nesciunt ullam minima, obcaecati
              reiciendis vero quidem."
            </div>
          </div>
          <Link
            to='/cart'
            className='buy-now-btn button-fill-bottom animated flipInX'
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
