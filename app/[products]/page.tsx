/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const getProductsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product data. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: string;
}

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );
  const products = getProductsData();
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

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex mx-[200px] justify-center gap-5 mt-5">
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
        <div className="mt-10 flex ">
          <button className="bg-[#2B4CD7] text-white p-5 rounded-lg hover:scale-[0.98]">
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
