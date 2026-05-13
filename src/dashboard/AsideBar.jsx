'use client'

import UserToggle from '@/components/UserToggle';
import { useProvider } from '@/provider/UserIdProvider';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import {
  HiOutlineSquares2X2,
  HiOutlinePhone,
  HiOutlineBookOpen,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineInboxArrowDown,
  HiOutlineGift,
  
  HiOutlineInformationCircle,
} from 'react-icons/hi2';
import { MdCancel } from 'react-icons/md';


const AsideBar = () => {

  const { dashboard} = useProvider();
  // console.log(dashboard)
  
  return (
    <aside className="drawer-side z-100 lg:border-r-2 lg:border-secondary">
      <label
        htmlFor="main-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="menu p-4 w-72 min-h-full bg-base-100 border-r border-base-200 text-base-content flex flex-col">
        {/* title */}
        <div className="lg:px-4  mb-6 lg:border-b-2 lg:border-secondary text-neutral  ">
          <h2 className="  hidden lg:block  text-2xl mb-4 font-black ">
            Hintro
          </h2>
          {/* btn X */}
          <div className=" flex">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="main-drawer"
                className="btn btn-square btn-ghost  text-neutral"
              >
                <MdCancel className="text-2xl" />
              </label>
            </div>
            {/* user toggle */}
            <div className="  block lg:hidden">
              <UserToggle />
            </div>
          </div>
        </div>
        <ul className="flex-1 px-2 space-y-1 text-neutral">
          <li className="bg-accent/12 text-secondary rounded-lg font-medium">
            <a className="py-3 text-accent">
              <HiOutlineSquares2X2 className="text-xl" /> Dashboard
            </a>
          </li>
          <li>
            <a className="py-3">
              <HiOutlinePhone className="text-xl" /> Call Insights
            </a>
          </li>
          <li className="flex-row justify-between items-center group">
            <a className="flex-1 py-3">
              <HiOutlineBookOpen className="text-xl" /> Knowledge Base
            </a>
            <HiOutlineInformationCircle className="text-base-content/30 group-hover:text-base-content" />
          </li>
          <li className="flex-row justify-between items-center group">
            <a className="flex-1 py-3">
              <HiOutlineChatBubbleLeftRight className="text-xl" /> Prompts
            </a>
            <HiOutlineInformationCircle className="text-base-content/30 group-hover:text-base-content" />
          </li>
          <li className="flex-row justify-between items-center group border-b border-secondary pb-4 mb-4">
            <a className="flex-1 py-3">
              <HiOutlineAdjustmentsHorizontal className="text-xl" /> Boxy
              Controls
            </a>
            <HiOutlineInformationCircle className="text-base-content/30 group-hover:text-base-content" />
          </li>

          <li>
            <a className="py-3">
              <HiOutlineInboxArrowDown className="text-xl" /> Feedback History
            </a>
          </li>
          <li>
            <a className="py-3">
              <HiOutlineGift className="text-xl" /> Feedback
            </a>
          </li>
          <div className="p-2 mt-auto text-neutral border-b border-secondary text-center">
            <p className=" ">
              <span>{dashboard?.usage?.kb_files?.used} of </span>
              <span>{dashboard?.usage?.kb_files?.limit} hours used</span>
            </p>
          </div>
          <li className="p-2 mt-auto">
            <button className="btn btn-neutral btn-block bg-zinc-500 hover:bg-zinc-600 border-none text-white rounded-xl">
              Upgrade
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;