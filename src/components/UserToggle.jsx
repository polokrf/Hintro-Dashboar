
import { useProvider } from '@/provider/UserIdProvider';
import React, { useState } from 'react';

const UserToggle = () => {
 const { setUserId, userId } = useProvider();


  return (
    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl w-fit">
      <button
        onClick={() => setUserId("u1")}
        className={` cursor-pointer px-2 py-1 rounded-lg text-sm font-medium transition-all ${
          userId === "u1"
            ? "bg-black text-white"
            : "bg-transparent text-gray-600 hover:bg-gray-200"
        }`}
      >
        u1
      </button>

      <button
        onClick={() => setUserId("u2")}
        className={`cursor-pointer px-2 py-1 rounded-lg text-sm font-medium transition-all ${
          userId === "u2"
            ? "bg-neutral text-primary"
            : "bg-transparent text-gray-600 hover:bg-gray-200"
        }`}
      >
         u2
      </button>
    </div>
  );
}


export default UserToggle;