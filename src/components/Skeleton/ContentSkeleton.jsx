import React from 'react';

const ContentSkeleton = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Header Skeleton */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <div className="h-8 w-64 bg-gray-200 animate-pulse rounded-md mb-2"></div>
          <div className="h-4 w-48 bg-gray-100 animate-pulse rounded-md"></div>
        </div>
        <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>

      {/* Summary Cards Skeleton */}
      <div className="grid grid-cols-4 gap-4 mb-12">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="p-6 border border-gray-100 rounded-2xl flex items-center space-x-4"
          >
            <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex-1">
              <div className="h-3 w-20 bg-gray-100 animate-pulse rounded mb-2"></div>
              <div className="h-6 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Calls Section Skeleton */}
      <div className="max-w-3xl mx-auto">
        <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mx-auto mb-8"></div>

        {[1, 2, 3].map(group => (
          <div key={group} className="mb-8">
            <div className="h-4 w-20 bg-gray-100 animate-pulse rounded mb-4"></div>
            {[1, 2].map(item => (
              <div
                key={item}
                className="flex items-center justify-between py-3 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-lg"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 animate-pulse rounded mb-2"></div>
                    <div className="h-3 w-16 bg-gray-100 animate-pulse rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-16 bg-gray-100 animate-pulse rounded"></div>
                  <div className="h-4 w-4 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSkeleton;
