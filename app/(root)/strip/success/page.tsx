"use client";

import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();
  const router = useRouter();

  useEffect(() => {
    // Clear the cart only once
    const timeout = setTimeout(() => {
      clearCart();
    }, 100);

    return () => clearTimeout(timeout);
  }, []); // Empty array ensures this runs only on mount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br ">
    <div className=" p-8 md:p-12 w-full max-w-lg">
      <div className="text-center">
        <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-green-700 mt-6">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mt-4">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
  );
};

export default SuccessPage;
