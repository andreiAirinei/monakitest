import React from 'react';

import ProductsHeader from '../../components/products-header/products-header.component';
import ShopItem from '../../components/shop-item/shop-item.component';
import ProductsFooter from '../../components/products-footer/products-footer.component';

import './products.styles.scss';

const ProductsPage = () => {
  return (
    <div className='products'>
      <ProductsHeader></ProductsHeader>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ProductsFooter></ProductsFooter>
    </div>
  );
};

export default ProductsPage;
