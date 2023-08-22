'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  addToCart,
  removeFromCart,
  totalPriceCart,
  setIsCartOpen,
} from '../store/state/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartMenu } from './CartMenu';
import { Loading } from '../components/Loading/Loading';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { motion, AnimatePresence } from 'framer-motion';
import { Balancer } from 'react-wrap-balancer';
import { ProductProps } from '../types/ProductTypes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const buttonStyles =
  'text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';

export const ItemDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );
  const [isCartOpen, setCart] = useState<boolean>(false);
  const [isSlected, setSelectImage] = useState<boolean>(false);

  const productsAdded = useSelector((state: any) => state.cart.cart);

  const params = useParams();

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const products: ProductProps[] = await getProductsData();
        const filteredProducts = products.filter(
          (product) => product.id === params.products
        );
        setSelectedProduct(filteredProducts[0] || null);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductsData();
  }, [params.products]);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    setCart(true);

    dispatch(addToCart({ item: { ...selectedProduct } }));
    dispatch(setIsCartOpen(true));
    toast.success('Item added to the cart!', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const handleClick = () => {
    setSelectImage(!isSlected);
  };

  const totalPrice = productsAdded.reduce(
    (total: number, product: ProductProps) => {
      return total + product.price;
    },
    0
  );

  if (!selectedProduct) {
    return (
      <div className=" flex justify-center w-[500px] h-[500px] mx-auto">
        <Loading />
      </div>
    );
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main className="md:flex md:flex-row flex-col md:mx-[200px] mx-[100] justify-center gap-5 md:my-5 my-10 absolute ">
        {/* Detail images */}
        <section className="md:flex  md:flex-row flex-col-reverse gap-2 justify-center">
          <div className="hidden md:flex">
            <Image
              alt="gallery"
              src={
                isSlected ? selectedProduct.image[0] : selectedProduct.image[1]
              }
              width="0"
              height="0"
              sizes="100vw"
              className="w-[150px] h-[200px] rounded-md flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            />{' '}
          </div>
          x
          <div className="flex justify-center mx-10">
            <InnerImageZoom
              src={
                isSlected ? selectedProduct.image[1] : selectedProduct.image[0]
              }
              zoomSrc={
                isSlected ? selectedProduct.image[1] : selectedProduct.image[0]
              }
              className="md:w-[400px] md:h-[500px] w-[300px] rounded-md flex justify-center items-center"
            />
          </div>
        </section>
        {/* end of image details */}
        <section className="flex flex-col text-white font-Montserrat max-w-[500px]">
          <div className="flex justify-center">
            <Balancer className="md:text-4xl text-2xl text-center my-5">
              {selectedProduct.title}
            </Balancer>
          </div>
          <div className="flex justify-center">
            <Balancer className="text-center text-2xl bg-slate-500 w-[50%] rounded-md p-1 mt-2">
              {selectedProduct.category}
            </Balancer>
          </div>
          <div className="px-5 ">
            <Balancer className="text-md font-light mt-10 ">
              {selectedProduct.description}
            </Balancer>
          </div>
          <div className="mt-10 flex flex-col px-5">
            <h2>Size</h2>
            <div className="flex gap-2 my-5">
              <button className={buttonStyles}>XL</button>
              <button className={buttonStyles}>L</button>
              <button className={buttonStyles}>M</button>
              <button className={buttonStyles}>S</button>
            </div>
            <ToastContainer />
            <button
              className="bg-[#2B4CD7] text-white p-5 rounded-lg hover:scale-[0.98] hover:focus:ring-2 focus:ring-blue-300 mb-10 "
              onClick={handleAddItem}
            >
              Add To Cart
            </button>
          </div>
        </section>
      </main>
      <AnimatePresence>
        {isCartOpen === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#121212]  w-[300px] md:w-[400px] h-auto absolute top-0 right-0  rounded">
              <CartMenu
                productsAdded={productsAdded}
                totalPrice={totalPrice}
                setCart={setCart}
                selectedProduct={selectedProduct}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// fetch data
const getProductsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {}
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch product data. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
