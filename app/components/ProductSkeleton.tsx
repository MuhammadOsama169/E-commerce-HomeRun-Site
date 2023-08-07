import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductProps } from '../types/ProductTypes';
import Balancer from 'react-wrap-balancer';

export const ProductSkeleton = ({
  title,
  category,
  price,
  image,
  id,
}: ProductProps) => {
  return (
    <>
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

        <h1 className="font-Montserrat text-lg mt-5 ">
          <Balancer>{title}</Balancer>
        </h1>
        <section className="flex mt-2 ">
          <div className="flex justify-start mx-auto">
            <h1 className=" font-Montserrat text-md bg-[#880808] rounded w-[100px] p-2">
              ${price}
            </h1>
          </div>

          <div className="flex justify-end mx-auto items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {Math.floor(Math.random() * 10)} Reviews
          </div>
        </section>
      </main>
    </>
  );
};
