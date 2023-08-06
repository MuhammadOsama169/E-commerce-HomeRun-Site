/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../store/index';

import { ItemDetails } from './ItemDetails';

const ProductDetails = () => {
  return (
    <Provider store={store}>
      <ItemDetails />
    </Provider>
  );
};

export default ProductDetails;
