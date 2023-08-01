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
    <main className="mx-auto  rounded bg-slate-300">
      <div className="p-5 grid grid-cols-3 ">
        <div className="">
          <Image
            alt="gallery"
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[200px] rounded-md  "
          />
        </div>
        <h1>{title}</h1>
        <h1>{price}</h1>
      </div>
    </main>
  );
};
