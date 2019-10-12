import React from 'react';

import { ReactComponent as ShoppingIcon } from './shopping-cart.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  return <ShoppingIcon className='cart-icon'></ShoppingIcon>;
};

export default CartIcon;
