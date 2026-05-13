'use client'
import React, { createContext, use, useState } from 'react';

const UserIdContext = createContext()

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState('u1');
  const [loader, setLoader] = useState(false);
  const [profile, setProfile] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [stats, setStats] = useState(null);
  const [callHis,setCallHis]=useState([])

  const info = {
    userId,
    setUserId,
    loader,
    setLoader,
    profile,
    setProfile,
    dashboard,
    setDashboard,
    stats,
    setStats,
    callHis,
    setCallHis,
  };
  return (
    <UserIdContext.Provider value={info}>{ children}</UserIdContext.Provider>
  );
};

export const useProvider = () => use(UserIdContext);
