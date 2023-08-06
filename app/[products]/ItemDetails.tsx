'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { addToCart, removeFromCart } from '../store/state/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartMenu } from './CartMenu';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: string;
}
const buttonStyles =
  'text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';

export const ItemDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );
  const productsAdded = useSelector((state) => state.cart.cart);

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
    dispatch(addToCart({ item: { ...selectedProduct } }));
  };

  const totalPrice = productsAdded.reduce((total, product) => {
    return total + product.price;
  }, 0);

  // const handleRemoveItem = () => {
  //   dispatch(removeFromCart({ id: product.id }));
  // };
  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className="flex mx-[200px] justify-center gap-5 mt-5 absolute">
        <div className="flex">
          <Image
            alt="gallery"
            src={selectedProduct.image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[400px] h-[500px] rounded-md flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col text-white font-Montserrat max-w-[500px]">
          <h1 className=" text-4xl">{selectedProduct.title}</h1>
          <h1 className="text-center text-2xl bg-slate-500 w-[50%] rounded-md p-1 mt-2">
            {selectedProduct.category}
          </h1>
          <p className="text-md font-light mt-10 ">
            {selectedProduct.description}
          </p>
          <div className="mt-10 flex flex-col">
            <h2>Size</h2>
            <div className="flex gap-2 my-5">
              <button className={buttonStyles}>XL</button>
              <button className={buttonStyles}>L</button>
              <button className={buttonStyles}>M</button>
              <button className={buttonStyles}>S</button>
            </div>

            <button
              className="bg-[#2B4CD7] text-white p-5 rounded-lg hover:scale-[0.98] hover:focus:ring-2 focus:ring-blue-300"
              onClick={handleAddItem}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[#edf2f7] w-[500px] h-auto absolute top-0 right-0">
        <CartMenu productsAdded={productsAdded} totalPrice={totalPrice} />
      </div>
    </main>
  );
};

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