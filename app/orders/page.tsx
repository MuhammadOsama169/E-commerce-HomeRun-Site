'use client';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationPanda from '../../public/assets/animation-panda.json';
import { Balancer } from 'react-wrap-balancer';
import { useSession } from 'next-auth/react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const OrdersData = await getAllOrders();
        setOrders(OrdersData);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  return (
    <main className="bg-gray-900 p-10 min-h-screen">
      <section className="container mx-auto">
        <h1 className=" text-white font-bold mb-8 font-Montserrat text-4xl">
          <Balancer className="text-white text-center "> Orders</Balancer>
        </h1>
        {!session && (
          <div className="w-[400px] h-[400px] my-10 flex flex-col justify-center mx-auto">
            {' '}
            <Lottie animationData={animationPanda} />
            <h1 className="mx-auto font-Montserrat text-4xl mb-10">
              <Balancer className="text-white text-center ">
                Please Sign in to check your orders
              </Balancer>
            </h1>
          </div>
        )}
        {/* Panda */}

        <div
          className={`${
            session
              ? 'bg-gray-800 rounded-lg shadow overflow-hidden overflow-x-auto'
              : 'hidden'
          } `}
        >
          <table className="min-w-full bg-gray-800">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Order ID</th>
                <th className="py-2 px-4 text-left">Products</th>
                <th className="py-2 px-4 text-left">Total Price</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order?.id}
                  className="border-b border-gray-600 hover:bg-gray-700 text-white"
                >
                  <td className="py-2 px-4">{order?.id}</td>
                  <td className="py-2 px-4">{order?.products.join(', ')}</td>

                  <td className="py-2 px-4">${order.price}</td>
                  <td className="py-2 px-4">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

// fetch data
const getAllOrders = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {});

  if (!res.ok) {
    throw new Error(`Failed to fetch product data. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

export default Orders;
