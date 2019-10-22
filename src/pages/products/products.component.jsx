import React, { useEffect, useLayoutEffect } from 'react';
// CONTEXTS
import HeaderContext from '../../contexts/header/header.context';

import WOW from 'wowjs';

import ProductsHeader from '../../components/products-header/products-header.component';
import ShopItem from '../../components/shop-item/shop-item.component';
import ProductVideo from '../../components/product-video/product-video.component';
import ProductAdvertisement from '../../components/product-advertisement/product-advertisement.component';
import ProductsFooter from '../../components/products-footer/products-footer.component';

import './products.styles.scss';

class ProductsPage extends React.Component {
  // useLayoutEffect(() => {
  //   new WOW.WOW({ live: false }).init();
  //   return () => {
  //     console.log('ProductPage unmounted');
  //   };
  // }, []);
  // useEffect(() => new WOW.WOW().init(), []);

  static contextType = HeaderContext;

  componentDidMount() {
    new WOW.WOW({ live: false }).init();
  }

  componentWillUnmount() {
    this.context.toggleHidden();
  }

  render() {
    return (
      <div className='products'>
        <ProductsHeader></ProductsHeader>
        <ShopItem></ShopItem>
        <ProductVideo />
        <ProductAdvertisement></ProductAdvertisement>
        <ShopItem></ShopItem>
        <ProductsFooter></ProductsFooter>
      </div>
    );
  }
}

export default ProductsPage;
