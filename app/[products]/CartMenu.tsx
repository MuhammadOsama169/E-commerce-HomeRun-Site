import Image from 'next/image';
import React from 'react';
import CartGif from '../../public/assets/wired-lineal-139-basket.gif';
import { ProductProps } from '../types/ProductTypes';
import { Balancer } from 'react-wrap-balancer';
import { useDispatch } from 'react-redux';
import { removeFromCart, totalPriceCart } from '../store/state/cartSlice';
import Link from 'next/link';

interface CartProps {
  totalPrice: number;
  productsAdded: ProductProps[];
  setCart: (value: boolean) => void;
  selectedProduct: any;
}

export const CartMenu = ({
  productsAdded,
  totalPrice,
  setCart,
  selectedProduct,
}: CartProps) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id: selectedProduct.id }));
  };
  const handleCheckoutPrice = () => {
    dispatch(totalPriceCart(totalPrice));
  };

  return (
    <main className="flex flex-col my-5">
      <div className="px-10 py-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
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
        {productsAdded.length === 0 && (
          <div className="flex flex-col justify-center mx-auto my-5 ">
            {' '}
            <Image src={CartGif} alt="cart" className="w-[100px]  mx-auto  " />
            <p className="text-white text-lg flex mx-auto  ">
              Cart Is Empty :(
            </p>
          </div>
        )}

        {productsAdded.map((cartItem, i) => (
          <main key={i} className="flex p-5 ">
            <div className="flex flex-col justify-center mx-auto">
              <Image
                alt="gallery"
                src={cartItem.image[0]}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[200px] h-[300px] rounded-md flex justify-center items-center  "
              />
              <h1 className="text-white text-center my-2">
                <Balancer className="max-w-[150px]">{cartItem.title}</Balancer>
              </h1>
              <div className="flex items-center justify-between gap-2">
                <h1 className="text-white text-center my-2 flex justify-start ">
                  <Balancer className="max-w-[150px] font-Montserrat text-md bg-[#8212F4] 	 rounded w-[150px] p-2 text-white">
                    Price: ${cartItem.price}
                  </Balancer>
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 flex justify-end hover:scale-[1.2]"
                  onClick={handleRemoveItem}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </main>
        ))}
        {/* End of cart  */}
        <section className="m-5">
          <h1 className="text-2xl font-bold mb-4 text-white">Cart Total</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-white text-lg font-medium">Total:</h2>
            <h2 className="text-blue-600 text-xl font-bold">${totalPrice}</h2>
          </div>
        </section>

        <div className="flex justify-center">
          <Link href="/checkout" className="flex justify-center w-[80%]">
            <button
              className="text-white w-full  hover:text-white border  bg-[#8212F4] hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center mt-2"
              onClick={handleCheckoutPrice}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
