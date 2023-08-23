'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { LoadingSpinner } from '../components/Loading/LoadingSpinner';
import Lottie from 'lottie-react';
import animationSuccess from '../../public/assets/animation-success.json';

const Success = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const payment_intent = searchParams.get('payment_intent');

  useEffect(() => {
    const updateOrderReq = async () => {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm/${payment_intent}`,
          { method: 'PUT' }
        );
      } catch (err) {
        console.log(err);
      }
    };
    updateOrderReq();
    // router.push('/orders');
  }, [payment_intent, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md p-8 bg-gray-800 shadow-lg rounded-lg text-white ">
        <Lottie className="h-[100px]" animationData={animationSuccess} />
        <h1 className="text-3xl font-bold mb-4 text-center">
          Thank you for your payment!
        </h1>
        <p className="text-lg mb-6">
          Your transaction has been successfully processed. Please do not close
          the page. You will be redirected shortly!
        </p>
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
};

export default Success;
