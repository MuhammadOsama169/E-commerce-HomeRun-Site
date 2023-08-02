import Image from 'next/image';
import React from 'react';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export const ProductSkeleton = ({
  title,
  category,
  price,
  image,
}: ProductProps) => {
  return (
    <main className="flex flex-col text-center mx-auto">
      <Image
        alt="gallery"
        src={image}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[300px] rounded-md flex justify-center items-center "
      />
      <h1>{title}</h1>
      <h1>{price}</h1>
    </main>
  );
};
