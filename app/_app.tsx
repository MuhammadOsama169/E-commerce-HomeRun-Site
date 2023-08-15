import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import { store } from '../app/store/index';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
