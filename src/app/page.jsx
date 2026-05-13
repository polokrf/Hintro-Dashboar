import React from 'react';
import DashboardMain from '@/dashboard/DashboardMain';
import AsideBar from '@/dashboard/AsideBar';
import Navbar from '@/components/layout/Navbar';

export default function Dashboard() {
  return (
    <div className="drawer lg:drawer-open bg-primary min-h-screen">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Page Content */}
      <div className=" drawer-content flex flex-col relative">
        {/* Navbar */}

        
          <Navbar />
        

        {/* Dashboard Content Area */}
        <div >
          <DashboardMain />
        </div>
      </div>

      {/* Sidebar  */}
      <AsideBar />
    </div>
  );
}

