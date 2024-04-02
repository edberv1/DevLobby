import React, { useEffect, useState } from 'react';
import './UserStats.scss';
import jsonData from './Constants/data.json';

const UserStats = () => {
  const [userData, setUserData] = useState({ totalUsers: 0, usersGained: 0, growthPercentage: 0 });

  useEffect(() => {
    
    const data = jsonData;
    const totalUsers = data.reduce((acc, weekData) => acc + weekData.registrations, 0);
    const usersGained = data[data.length - 1].registrations;
    const growthPercentage = ((usersGained / data[data.length - 2].registrations) * 100).toFixed(2);
    setUserData({ totalUsers, usersGained, growthPercentage });
  }, []); 

  return (
    <div className='user-stats'>
        <div className='user-stats-card'>
          <h3>Total Users</h3>
          <p>{userData.totalUsers}</p>
        </div>
        <div className='user-stats-card'>
          <h3>Users Gained This Week</h3>
          <p>{userData.usersGained}</p>
        </div>
        <div className='user-stats-card'>
          <h3>Weekly Growth Percentage</h3>
          <p>{userData.growthPercentage}%</p>
        </div>
      </div>
  );
};

export default UserStats;
