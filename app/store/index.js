import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const isClient = typeof window !== 'undefined';

let store;
let persistor;

if (isClient) {
  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, cartReducer);

  store = configureStore({
    reducer: {
      cart: persistedReducer,
    },
  });

  persistor = persistStore(store);
} else {
  store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
}

export { store, persistor };
