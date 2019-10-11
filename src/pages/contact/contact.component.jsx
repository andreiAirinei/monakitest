import React from 'react';
import './contact.styles.scss';

const ContactPage = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapp'>
        <div className='title'>
          <span>Contact</span>
        </div>
        <p>
          If you have any questions, feel free to contact us using the form
          below. Have shipping related questions? You may find your answer{' '}
          <a href=''>there</a>.
        </p>
        <p>Our operating hours are 09:00 – 17:00 (5PM) CEST.</p>
        <p>Our support is also available at info@monaki.co.</p>
        <form>
          <div className='form-grid'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Phone Number' />
            <textarea placeholder='Message'></textarea>
            <div>
              <button type='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
