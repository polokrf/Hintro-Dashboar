import React from 'react';
import {
  LayoutDashboard,
  PhoneCall,
  Database,
  Terminal,
  Settings,
  MessageSquare,
  ThumbsUp,
} from 'lucide-react';

const IntroSkeleton = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Skeleton */}
      <aside className="w-64 border-r border-gray-100 flex flex-col p-4">
        <div className="h-8 w-24 bg-gray-200 animate-pulse rounded mb-10 ml-2"></div>

        <nav className="space-y-1 flex-1">
          {[
            { icon: LayoutDashboard, active: true },
            { icon: PhoneCall },
            { icon: Database },
            { icon: Terminal },
            { icon: Settings },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center px-3 py-2 rounded-lg ${item.active ? 'bg-blue-50' : ''}`}
            >
              <item.icon
                className={`w-5 h-5 ${item.active ? 'text-blue-600' : 'text-gray-400'}`}
              />
              <div
                className={`ml-3 h-4 flex-1 animate-pulse rounded ${item.active ? 'bg-blue-200' : 'bg-gray-100'}`}
              ></div>
            </div>
          ))}

          <div className="pt-8 space-y-1">
            <div className="flex items-center px-3 py-2">
              <MessageSquare className="w-5 h-5 text-gray-400" />
              <div className="ml-3 h-4 w-28 bg-gray-100 animate-pulse rounded"></div>
            </div>
            <div className="flex items-center px-3 py-2">
              <ThumbsUp className="w-5 h-5 text-gray-400" />
              <div className="ml-3 h-4 w-20 bg-gray-100 animate-pulse rounded"></div>
            </div>
          </div>
        </nav>

        <div className="mt-auto p-3 bg-gray-50 rounded-xl">
          <div className="h-3 w-32 bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-10 w-full bg-gray-400 animate-pulse rounded-lg"></div>
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8">
          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-24 bg-gray-100 animate-pulse rounded-full"></div>
            <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
        </header>

        <div className="p-10 max-w-6xl mx-auto">
          {/* Welcome Area */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="h-10 w-80 bg-gray-200 animate-pulse rounded-md mb-3"></div>
              <div className="h-4 w-56 bg-gray-100 animate-pulse rounded-md"></div>
            </div>
            <div className="h-11 w-36 bg-black animate-pulse rounded-xl"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="p-6 border border-gray-100 rounded-3xl flex items-center space-x-4 shadow-sm"
              >
                <div className="h-12 w-12 bg-gray-100 animate-pulse rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-3 w-24 bg-gray-50 animate-pulse rounded mb-2"></div>
                  <div className="h-7 w-20 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Section */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mx-auto mb-10"></div>

            {[1, 2].map(group => (
              <div key={group} className="text-left mb-10">
                <div className="h-4 w-24 bg-gray-100 animate-pulse rounded mb-6"></div>
                {[1, 2, 3].map(item => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-gray-200 animate-pulse rounded-xl"></div>
                      <div>
                        <div className="h-5 w-40 bg-gray-200 animate-pulse rounded mb-2"></div>
                        <div className="h-4 w-12 bg-gray-100 animate-pulse rounded"></div>
                      </div>
                    </div>
                    <div className="h-4 w-20 bg-gray-100 animate-pulse rounded"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntroSkeleton;
