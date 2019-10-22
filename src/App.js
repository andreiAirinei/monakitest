import React, { useState } from 'react';
// CONTEXTS
import HeaderContext from './contexts/header/header.context';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FaqShippingPage from './pages/faq-shipping/faq-shipping.component';
import ContactPage from './pages/contact/contact.component';
import AboutPage from './pages/about/about.component';

import ProductsPage from './pages/products/products.component';

import TermsConditions from './pages/terms-conditions/terms-conditions.component';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.component';
import Cart from './pages/cart/cart.component';
import Footer from './components/footer/footer.component';

import './App.css';

const App = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => setHidden(!hidden);

  return (
    // <HeaderContext.Provider
    //   value={{
    //     hidden,
    //     toggleHidden
    //   }}
    // >
    <div>
      {hidden ? null : <Header />}
      {/* The moment that a route inside of it finds a match in the path, it does not render anything else BUT that route */}
      <Switch>
        {/* <Route exact path='/' component={HomePage}></Route> */}
        <Route
          exact
          path='/'
          render={() => (
            <HeaderContext.Provider value={{ hidden, toggleHidden }}>
              <HomePage />
            </HeaderContext.Provider>
          )}
        ></Route>
        {/* <Route exact path='/products' component={ProductsPage}></Route> */}
        <Route
          exact
          path='/products'
          render={() => (
            <HeaderContext.Provider value={{ hidden, toggleHidden }}>
              <ProductsPage />
            </HeaderContext.Provider>
          )}
        ></Route>
        <Route exact path='/faq-shipping' component={FaqShippingPage}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
        <Route exact path='/contact' component={ContactPage}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route
          exact
          path='/terms-conditions'
          component={TermsConditions}
        ></Route>
        <Route exact path='/privacy-policy' component={PrivacyPolicy}></Route>
      </Switch>
      {hidden ? null : <Footer />}
    </div>
    // </HeaderContext.Provider>
  );
};

export default App;
