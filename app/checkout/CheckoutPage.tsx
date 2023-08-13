import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartGif from '../../public/assets/wired-lineal-139-basket.gif';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';
import { removeFromCart } from '../store/state/cartSlice';
import { ProductProps } from '../types/ProductTypes';
import Link from 'next/link';

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const ShoppingCartItems: ProductProps[] = useSelector(
    (state: any) => state.cart.cart
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <main>
      {ShoppingCartItems.length === 0 && (
        <div className="flex flex-col justify-center mx-auto my-5 ">
          {' '}
          <Image src={CartGif} alt="cart" className="w-[300px]  mx-auto  " />
          <p className="text-white text-4xl font-Montserrat flex mx-auto  ">
            Cart Is Empty :(
          </p>
        </div>
      )}
      {/* Shopping Cart */}
      {ShoppingCartItems.map((cartItem) => (
        <main
          key={cartItem.id}
          className="flex p-5 my-10 md:mx-[200px] mx-[50px] rounded-lg shadow-[#D3D3D3] shadow "
        >
          <section className="flex flex-col md:flex justify-center mx-auto">
            <Image
              alt="gallery"
              src={cartItem.image[0]}
              width="0"
              height="0"
              sizes="100vw"
              className="md:w-[200px] w-auto h-[300px] rounded-md flex justify-center items-center  "
            />
            <section className="flex flex-col md:ml-10 font-Montserrat">
              <h1>
                <Balancer className="text-white  my-2 md:text-4xl text-xl">
                  {cartItem.title}
                </Balancer>
              </h1>
              <h1>
                <Balancer className="text-white  my-2  text-sm ">
                  {cartItem.description}
                </Balancer>
              </h1>
              <span className="text-[#00FFFF]">In stock</span>
              <span className="text-white text-bold">
                Eligible for FREE delivery
              </span>
              <div className="flex  items-center  gap-2 mx-auto">
                {/* // */}
                <section className="flex items-center justify-between gap-2 md:w-[800px]  text-md mt-12">
                  <h1 className="text-black text-center my-2 flex justify-start  ">
                    <Balancer className=" bg-[#880808] rounded p-2 text-white">
                      Price: ${cartItem.price}
                    </Balancer>
                  </h1>
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={() => handleRemoveItem(cartItem?.id)}
                  >
                    <p className="text-white ">Remove Item</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="w-6 h-6 hover:scale-[1.2] cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </main>
      ))}
      <Link
        href="/checkout"
        className="flex justify-center md:w-[500px] w-auto md:mx-auto mx-[100px]"
      >
        <button className="text-white w-full hover:text-white border border-blue-700 bg-blue-800 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mt-2 my-10">
          Proceed to Buy
        </button>
      </Link>
    </main>
  );
};
