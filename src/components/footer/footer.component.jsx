import React from 'react';

import { Link } from 'react-router-dom';

import './footer.styles.scss';

import { ReactComponent as AmexIcon } from './footer-assets/amex.svg';
import { ReactComponent as AppleIcon } from './footer-assets/apple.svg';
import { ReactComponent as GoogleIcon } from './footer-assets/google.svg';
import { ReactComponent as MaestroIcon } from './footer-assets/maestro.svg';
import { ReactComponent as MastercardIcon } from './footer-assets/mastercard.svg';
import { ReactComponent as PaypalIcon } from './footer-assets/paypal.svg';
import { ReactComponent as Shoppify } from './footer-assets/shopify.svg';
import { ReactComponent as VisaIcon } from './footer-assets/visa.svg';

const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

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
            <span role='img' aria-label='Review Stars'>
              ⭐️⭐️⭐️⭐️⭐️(10,321 Reviews)
            </span>
          </div>
          <div>
            <span className='title'>About</span>
            <ul>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/faq-shipping'>FAQ & Shipping</Link>
              </li>
              <li>
                <Link to='/terms-conditions'>Terms and Conditions</Link>
              </li>
              <li>
                <Link to='/privacy-policy'>Privacy Policy</Link>
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
              <input type='email' placeholder='Enter your email address' />
              <button type='submit' onClick={handleSubmit}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            <a href='/'>© Monaki Home®</a>
          </div>
          <div>
            <ul className='payments-list'>
              <li>
                <span>
                  <AmexIcon></AmexIcon>
                </span>
              </li>
              <li>
                <span>
                  <GoogleIcon></GoogleIcon>
                </span>
              </li>
              <li>
                <span>
                  <MaestroIcon></MaestroIcon>
                </span>
              </li>
              <li>
                <span>
                  <MastercardIcon></MastercardIcon>
                </span>
              </li>

              <li>
                <span>
                  <Shoppify></Shoppify>
                </span>
              </li>
              <li>
                <span>
                  <VisaIcon></VisaIcon>
                </span>
              </li>
              <li>
                <span>
                  <AppleIcon></AppleIcon>
                </span>
              </li>
              <li>
                <span>
                  <PaypalIcon></PaypalIcon>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
