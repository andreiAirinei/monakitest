import React from 'react';
import './footer.styles.scss';
// import { ReactComponent as ShoppingIcon } from './shopping-cart.svg';
import { ReactComponent as AmexIcon } from './amex.svg';
import { ReactComponent as AppleIcon } from './apple.svg';
import { ReactComponent as GoogleIcon } from './google.svg';
import { ReactComponent as MaestroIcon } from './maestro.svg';
import { ReactComponent as MastercardIcon } from './mastercard.svg';
import { ReactComponent as PaypalIcon } from './paypal.svg';
import { ReactComponent as Shoppify } from './shopify.svg';
import { ReactComponent as VisaIcon } from './visa.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div>
            <span className='title'>About Monaki®</span>
            <p>
              Here at Monaki® we love to create high quality products that make
              an impact in people's lives.{' '}
            </p>
            <br />
            <p>Have a question? Contact us</p>
            <span role='img'>⭐️⭐️⭐️⭐️⭐️(10,321 Reviews)</span>
          </div>
          <div>
            <span className='title'>About</span>
            <ul>
              <li>
                <a href=''>About us</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
              <li>
                <a href=''>FAQ & Shipping</a>
              </li>
              <li>
                <a href=''>Terms and Conditions</a>
              </li>
              <li>
                <a href=''>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <span className='title'>Sign up for our newsletter</span>
            <p>
              And be the first to receive exclusive discounts and new product
              releases.
            </p>
            <form>
              <input
                type='email'
                name='email'
                placeholder='Enter your email address'
              />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            <a href=''>© Monaki Home®</a>
          </div>
          <div>
            <ul className='payments-list'>
              <li>
                <AmexIcon></AmexIcon>
              </li>
              <li>
                <GoogleIcon></GoogleIcon>
              </li>
              <li>
                <MaestroIcon></MaestroIcon>
              </li>
              <li>
                <MastercardIcon></MastercardIcon>
              </li>

              <li>
                <Shoppify></Shoppify>
              </li>
              <li>
                <VisaIcon></VisaIcon>
              </li>
              <li>
                <AppleIcon></AppleIcon>
              </li>
              <li>
                <PaypalIcon></PaypalIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
