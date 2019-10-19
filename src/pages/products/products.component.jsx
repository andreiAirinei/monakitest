import React from 'react';

import ProductsHeader from '../../components/products-header/products-header.component';
import ShopItem from '../../components/shop-item/shop-item.component';
import ProductVideo from '../../components/product-video/product-video.component';
import ProductAdvertisement from '../../components/product-advertisement/product-advertisement.component';
import ProductsFooter from '../../components/products-footer/products-footer.component';

import './products.styles.scss';

const ProductsPage = () => {
  return (
    <div className='products'>
      <ProductsHeader></ProductsHeader>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ProductVideo />
      <ProductAdvertisement></ProductAdvertisement>
      <ProductsFooter></ProductsFooter>
    </div>
  );
};

export default ProductsPage;
