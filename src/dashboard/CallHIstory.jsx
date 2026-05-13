
import React from 'react';
import { useProvider } from '@/provider/UserIdProvider';

import { MoreVertical, Phone } from 'lucide-react';

import ContentSkeleton from '@/components/Skeleton/ContentSkeleton';


const CallHistory = () => {
  const { callHis ,loader} = useProvider();

  
  const groupedCalls = callHis?.callSessions?.reduce((acc, session) => {
    const date = new Date(session.createdAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
    const suffix = day => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    const day = new Date(session.createdAt).getDate();
    const formattedDate = `${date}${suffix(day)}`;

    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].push(session);
    return acc;
  }, {});

  if (loader) {
    return <ContentSkeleton />;
  }

  return (
    <div className="w-full md:max-w-[786px] mx-auto py-2 bg-primary ">
      {groupedCalls &&
        Object.keys(groupedCalls).map(date => (
          <div key={date} className="mb-6 text-left">
            {/* Date Header */}
            <h3 className="text-neutral/40 text-sm font-medium mb-4 px-2">
              {date}
            </h3>

            {/* Call Session List */}
            <div className="space-y-4">
              {groupedCalls[date].map(session => (
                <div
                  key={session._id}
                  className="flex items-center justify-between "
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Avatar */}
                    <div className="w-10 h-10 bg-info-content rounded-md flex items-center justify-center text-neutral font-bold">
                      {session.description?.charAt(0) || 'C'}
                    </div>

                    {/* Title and Participants */}
                    <div>
                      <h4 className="text-neutral font-semibold text-[14px]">
                        {session?.description}
                      </h4>
                      <div className="flex -space-x-2 mt-1">
                        {session.participants?.map((_, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded-full border-2 border-secondary bg-primary flex items-center justify-center overflow-hidden"
                          >
                            <img
                              src={`https://i.ibb.co.com/CpwL6P9m/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg`}
                              alt="participant"
                             
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Time and Actions */}
                  <div className="flex items-center gap-1">
                    <span className="text-neutral text-sm font-medium">
                      {new Date(session.createdAt)
                        .toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })
                        .toLowerCase()}
                    </span>
                    <button className="p-1  rounded-full text-neutral">
                      <MoreVertical size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CallHistory;
