import React from 'react';
// import logo from './logo.svg';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FaqShipping from './pages/faq-shipping/faq-shipping.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <HomePage></HomePage> */}
      <FaqShipping></FaqShipping>
      <Footer></Footer>
    </div>
  );
}

export default App;
