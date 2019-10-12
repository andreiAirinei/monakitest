import React from 'react';

import ProductsHeader from '../../components/products-header/products-header.component';
import ProductsFooter from '../../components/products-footer/products-footer.component';

import './products.styles.scss';

const ProductsPage = () => {
  return (
    <div className='products'>
      <ProductsHeader></ProductsHeader>
      <h1>ProductsPage</h1>
      <ProductsFooter></ProductsFooter>
    </div>
  );
};

export default ProductsPage;
