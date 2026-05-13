'use client'

import {
  HiOutlineSquares2X2,
 
} from 'react-icons/hi2';
import { FiCalendar, FiClock, FiStar } from 'react-icons/fi';
import StatCard from './StartCard';
import { useProvider } from '@/provider/UserIdProvider';
import { api } from '@/utils/Api/api';
import { useEffect, useState } from 'react';
import { formatDuration, formatLastSession } from '@/services/TimeFormate';
import CallHistory from './CallHIstory';
import ContentSkeleton from '@/components/Skeleton/ContentSkeleton';

const DashboardMain = () => {
  const {
    userId,
    profile,
    setProfile,
    stats,
    setStats,
    loader,
    setLoader,
    setDashboard,
    setCallHis,
    callHis,
  } = useProvider();
  
useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoader(true);

        const [profileData, dashboardData, statsData,callHistory] = await Promise.all([
          api.getProfile(userId),
          api.getDashboard(userId),
          api.getCallStats(userId),
          api.getCallHistory(userId)
        ]);

        setProfile(profileData);
        setDashboard(dashboardData);
        setStats(statsData);
         setCallHis(callHistory)
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [userId]);
  
  const getLatestSession = (sessions= []) => {
    if (!Array.isArray(sessions) || sessions.length === 0) {
      return 0;
    }

    return [...sessions].sort((a, b) => new Date(b) - new Date(a))[0];
  };
 
   if (loader) {
     return <ContentSkeleton />;
   }
  return (
    <main className="p-6 md:p-10 md:max-w-7xl w-full mx-auto mt-">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 ">
        <div>
          <h2 className="text-2xl font-bold text-neutral">
            Hi,{profile?.firstName} 👋 Welcome to Hintro
          </h2>
          <p className=" text-sm mt-1 text-neutral">
            Ready to make your next call smarter?
          </p>
        </div>
        <button className="btn btn-neutral mt-4 md:mt-0 px-2 py-2  rounded-lg">
          Start<span className=" hidden lg:block"> New</span> Call
        </button>
      </header>

      {/* Stats Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        <StatCard
          bg="bg-info"
          icon={<FiStar className="text-red-400" />}
          label="Total Sessions"
          value={stats?.totalSessions || 0}
        />
        <StatCard
          bg="bg-success"
          icon={<FiClock className="text-cyan-500" />}
          label="Average Duration"
          value={formatDuration(stats?.averageDuration) || 0}
        />
        <StatCard
          bg="bg-[var(--card-alt)]"
          icon={<HiOutlineSquares2X2 className="text-green-500" />}
          label="AI Used"
          value={` ${stats?.totalAIInteractions ? `${stats.totalAIInteractions} times` : 0} `}
        />
        <StatCard
          bg="bg-warning"
          icon={<FiCalendar className="text-purple-500" />}
          label="Last Session"
          value={formatLastSession(getLatestSession(stats?.lastSession)) || '_'}
        />
      </div>

      {/* Empty State Layout */}
      <section className="text-center text-neutral">
        <h3 className="font-bold text-lg mb-8">Recent calls</h3>
        {callHis?.callSessions?.length === 0 ? (
          <div className="border  border-secondary rounded-[16px] p-16 bg-primary flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/12 text-secondary rounded-xl flex items-center justify-center mb-4">
              <FiCalendar className="text-2xl text-accent" />
            </div>
            <h4 className="font-bold text-neutral text-lg">No Recent Calls</h4>
            <p className="text-neutral text-sm max-w-sm mt-2 mb-8">
              Connect your Google Calendar to see upcoming meetings, get
              reminders, and join calls directly from Hintro.
            </p>
            <button className="btn btn-outline  btn-sm  text-neutral  rounded-md">
              Start a Call
            </button>
          </div>
        ) : (
          <CallHistory />
        )}
      </section>
    </main>
  );
};

export default DashboardMain;