import Image from 'next/image';
import React from 'react';
import { ProductProps } from '../types/ProductTypes';
import { Balancer } from 'react-wrap-balancer';

interface CartProps {
  totalPrice: number;
  productsAdded: ProductProps[];
  setCart: (value: boolean) => void;
}
export const CartMenu = ({ productsAdded, totalPrice, setCart }: CartProps) => {
  return (
    <main className="flex flex-col my-5">
      <div className="px-10 py-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:scale-[1.2]"
          onClick={() => setCart(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* CartMenu items */}
      <div className="text-white flex-col ">
        {productsAdded.map((cartItem, i) => (
          <main key={i} className="flex p-5 ">
            <div className="flex flex-col justify-center mx-auto">
              <Image
                alt="gallery"
                src={cartItem.image}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[200px] h-[300px] rounded-md flex justify-center items-center  "
              />
              <h1 className="text-black text-center my-2">
                <Balancer>{cartItem.title}</Balancer>
              </h1>
            </div>
          </main>
        ))}
        {/* End of cart  */}
        <section className="mx-5">
          <h1 className="text-2xl font-bold mb-4 text-black">Cart Total</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-black text-lg font-medium">Total:</h2>
            <h2 className="text-blue-600 text-xl font-bold">${totalPrice}</h2>
          </div>
        </section>

        <div className="flex justify-center">
          <button className="text-white hover:text-white border border-blue-700 bg-blue-800 hover:bg-blue-500  focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Continue Shopping
          </button>
          <button className="text-white hover:text-white border border-red-700 bg-red-800 hover:bg-red-500  focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Chekout
          </button>
        </div>
      </div>
    </main>
  );
};
