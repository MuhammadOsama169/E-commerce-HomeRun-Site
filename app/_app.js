import React from 'react';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
