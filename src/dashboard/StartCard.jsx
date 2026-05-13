import React from 'react';

 // Reusable Stat Card Component
export default function StatCard({ bg, icon, label, value }) {
  return (
    <div
      className={`card card-side  bg-primary border border-neutral/20 p-5 rounded-2xl transition-all hover:shadow-md`}
    >
      <div className=" w-12 h-12 rounded-xl flex items-center justify-center text-xl ">
        {icon}
      </div>
      <div className="card-body p-0 pl-4 justify-center">
        <p className="text-[11px] text-neutral uppercase tracking-wider font-bold opacity-60 leading-none mb-1">
          {label}
        </p>
        <h3 className="text-2xl font-bold text-neutral leading-none">
          {value}
        </h3>
      </div>
    </div>
  );
}
