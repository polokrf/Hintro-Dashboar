import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <AlertCircle className="w-16 h-16 text-blue-600" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-blue-600 opacity-20 select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Please check the URL and try
            again.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mt-10 flex justify-center space-x-2">
          <div className="h-1.5 w-12 bg-blue-600 rounded-full"></div>
          <div className="h-1.5 w-4 bg-blue-200 rounded-full"></div>
          <div className="h-1.5 w-4 bg-blue-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
