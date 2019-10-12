import React, { useEffect } from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FaqShippingPage from './pages/faq-shipping/faq-shipping.component';
import ContactPage from './pages/contact/contact.component';
import AboutPage from './pages/about/about.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  // SCROLL TO TOP FUNCTION
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header></Header>
      {/* The moment that a route inside pf it find a match in the path, it does not render anything else BUT that route */}
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/faq-shipping' component={FaqShippingPage}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
        <Route exact path='/contact' component={ContactPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
