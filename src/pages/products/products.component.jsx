import React, { useEffect, useLayoutEffect } from 'react';
import WOW from 'wowjs';

import ProductsHeader from '../../components/products-header/products-header.component';
import ShopItem from '../../components/shop-item/shop-item.component';
import ProductVideo from '../../components/product-video/product-video.component';
import ProductAdvertisement from '../../components/product-advertisement/product-advertisement.component';
import ProductsFooter from '../../components/products-footer/products-footer.component';

import './products.styles.scss';

const ProductsPage = () => {
  // useLayoutEffect(() => {
  //   new WOW.WOW({ live: false }).init();
  //   return () => {};
  // }, []);
  // new WOW.WOW({ live: false }).init();
  useEffect(() => new WOW.WOW().init(), []);
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
};

export default ProductsPage;
