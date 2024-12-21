import Link from 'next/link';
import React from 'react';
import { XCircle, Home, ShoppingCart } from 'lucide-react';
const CancelPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
    <div className="max-w-md w-full  rounded-2xl  p-8 ">
      {/* Error Icon */}
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-red-100 p-4">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600">
          Your payment process was cancelled. No worries - your cart is still saved!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 
                       bg-gray-900 text-white rounded-lg hover:bg-gray-800 
                       transition-colors duration-200 flex-1"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <Link 
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 
                       bg-white text-gray-900 rounded-lg hover:bg-gray-100 
                       border border-gray-300 transition-colors duration-200 flex-1"
          >
            <ShoppingCart className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Help Text */}
      <p className="mt-8 text-center text-sm text-gray-500">
        Need help? {" "}
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact our support team
        </a>
      </p>
    </div>
  </div>
  );
};

export default CancelPage;
