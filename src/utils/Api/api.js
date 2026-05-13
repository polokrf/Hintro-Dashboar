import axios from 'axios';
import { assertRootParamInSamples } from 'next/dist/server/app-render/instant-validation/instant-samples';

const  Base_URL ='https://mock-backend-hintro.vercel.app'


const apiFetch = async (endpoint, userId) => {
  const res = await axios.get(`${Base_URL}${endpoint}`, {
    headers: {
      'x-user-id': userId,
    },
  });

  return res.data
}
export const api = {
  getProfile: userId => apiFetch('/api/auth/profile', userId),
  getDashboard: userId => apiFetch('/api/auth/dashboard', userId),
  getCallStats: userId => apiFetch('/api/call-sessions/stats', userId),
  getCallHistory: (userId, limit = 10) =>
  apiFetch(`/api/call-sessions?limit=${limit}`, userId),
};

