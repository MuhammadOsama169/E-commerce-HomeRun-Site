import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: string;
}

export const ProductSkeleton = ({
  title,
  category,
  price,
  image,
  id,
}: ProductProps) => {
  return (
    <main className="flex flex-col text-center mx-auto ">
      <Link href={`./${id}`}>
        <Image
          alt="gallery"
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[300px] rounded-md flex justify-center items-center hover:scale-[0.98] "
        />
      </Link>

      <h1 className="font-Montserrat text-lg mt-5 ">{title}</h1>
      <section className="flex mt-2 ">
        <div className="flex justify-start mx-auto">
          <h1 className=" font-Montserrat text-md bg-[#880808] rounded w-[100px] p-2">
            {price}
          </h1>
        </div>
        <div className="flex justify-end mx-auto items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 hover:scale-[1.2]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 hover:scale-[1.2]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </section>
    </main>
  );
};
