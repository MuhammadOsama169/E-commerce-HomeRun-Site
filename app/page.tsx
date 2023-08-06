'use client';
import ItemsGallery from './components/ItemsGallery';
import { Provider } from 'react-redux';
import { store } from './store';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <ItemsGallery />
        {/* <CartMenu /> */}
      </main>
    </Provider>
  );
}
