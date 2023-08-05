import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
