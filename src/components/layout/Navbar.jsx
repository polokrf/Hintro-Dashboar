'use client'
import Image from 'next/image';
import React, { useRef } from 'react';

import { LuLogOut } from 'react-icons/lu';
import { IoPlaySharp } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CiMenuBurger } from 'react-icons/ci';
import UserToggle from '../UserToggle';
import Modal from '@/dashboard/Modal';


const Navbar = () => {
  const modalRef = useRef()
  const handleRef = ()=>{
    modalRef.current.showModal()
  }
  
  return (
    <nav className="navbar   bg-primary shadow-sm backdrop-blur-2xl  border-b border-base-200 px-4 sticky top-0 z-90">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="main-drawer"
          className="btn btn-square btn-ghost  text-neutral"
        >
          <CiMenuBurger className="text-2xl" />
        </label>
      </div>

      <div
        className="flex-1 
       text-center lg:text-left"
      >
        <h1 className="text-2xl font-bold ml-2 text-neutral">Dashboard</h1>
      </div>

      <div className="flex gap-4 items-center ">
        <div className=" hidden lg:block">
          <UserToggle />
        </div>
        <button className=" border  text-neutral border-neutral px-3 py-[6px] gap-2 hidden lg:flex items-center rounded-lg cursor-pointer ">
          <IoPlaySharp />
          Watch Tutorial
        </button>

        {/* User Toggle (u1/u2) */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className=" flex items-center">
            <img
              className="h-8.5 w-8.5 rounded-full object-cover"
              src="https://i.ibb.co.com/CpwL6P9m/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
              alt="user"
              
            />

            <div className=" hidden lg:block">
              <RiArrowDropDownLine className=" text-neutral  " size={17} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <button
              onClick={handleRef}
              className=" py-3 pr-5 pl-3  text-neutral cursor-pointer"
            >
              <LuLogOut className=" inline-block" /> LogOut
            </button>
          </ul>
        </div>
      </div>
      {/* modal */}
      <Modal modalRef={modalRef} />
    </nav>
  );
};

export default Navbar;