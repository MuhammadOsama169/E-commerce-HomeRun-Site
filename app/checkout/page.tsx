'use client';
import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { CheckoutPage } from './CheckoutPage';

const page = () => {
  return (
    <Provider store={store}>
      <CheckoutPage />
    </Provider>
  );
};
export default page;
