import React from 'react';
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

class App extends React.Component {
  render() {
    const prod = true;

    if (prod === true) {
      return <ProductsPage />;
    } else {
      return (
        <div>
          <Header></Header>
          {/* The moment that a route inside of it finds a match in the path, it does not render anything else BUT that route */}
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route
              exact
              path='/faq-shipping'
              component={FaqShippingPage}
            ></Route>
            <Route exact path='/about' component={AboutPage}></Route>
            <Route exact path='/contact' component={ContactPage}></Route>
            <Route exact path='/cart' component={Cart}></Route>
            <Route
              exact
              path='/terms-conditions'
              component={TermsConditions}
            ></Route>
            <Route
              exact
              path='/privacy-policy'
              component={PrivacyPolicy}
            ></Route>
          </Switch>
          <Footer></Footer>
        </div>
      );
    }
  }
}

export default App;
