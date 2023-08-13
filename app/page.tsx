'use client';
import ItemsGallery from './components/ItemsGallery';
import { Provider } from 'react-redux';
import { store } from './store';
import { Slider } from './components/Slider';
import { Balancer } from 'react-wrap-balancer';

export default function Home() {
  return (
    <Provider store={store}>
      <Slider />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <h1 className=" lg:text-6xl font-Montserrat text-5xl font-bold tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 my-10">
          <Balancer>Discover Your Style</Balancer>
        </h1>
        <ItemsGallery />
      </main>
    </Provider>
  );
}
