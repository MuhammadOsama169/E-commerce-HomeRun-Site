'use client';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  console.log(orders);

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
        <h1 className="text-3xl text-white font-bold mb-8">Orders</h1>

        <div className="bg-gray-800 rounded-lg shadow overflow-hidden overflow-x-auto">
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
