import React from 'react';
import { useSelector } from 'react-redux';

export const CartMenu = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return <div>CartMenu</div>;
};
