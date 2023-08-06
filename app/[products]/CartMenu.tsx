import Image from 'next/image';
import React from 'react';

export const CartMenu = ({ productsAdded, totalPrice }) => {
  return (
    <div className="text-white ">
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
            <h1 className="text-black">{cartItem.title}</h1>
          </div>
        </main>
      ))}
      {/* End of cart  */}
      <h1 className="text-2xl font-bold mb-4 text-black">Cart Total</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-black text-lg font-medium">Total:</h2>
        <h2 className="text-blue-600 text-xl font-bold">${totalPrice}</h2>
      </div>
      <div className="flex justify-center">
        <button className="text-white hover:text-white border border-blue-700 bg-blue-800 hover:bg-blue-500  focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Continue Shopping
        </button>
        <button className="text-white hover:text-white border border-red-700 bg-red-800 hover:bg-red-500  focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Chekout
        </button>
      </div>
    </div>
  );
};
