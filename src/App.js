import React from 'react';
// import logo from './logo.svg';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FaqShippingPage from './pages/faq-shipping/faq-shipping.component';
import ContactPage from './pages/contact/contact.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <HomePage></HomePage> */}
      {/* <FaqShippingPage></FaqShippingPage> */}
      <ContactPage></ContactPage>
      <AboutPage></AboutPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
