import React from 'react';
import SearchBar from '../../molecules/SearchBar';
import AdminNotificationCenter from '../../molecules/AdminNotificationCenter';
import "./DashboardHeader.scss"

function DashboardHeader() {
  return (
    <div className="dashboard-ribbon">
      <SearchBar />
      <h2>Welcome to your Admin Dashboard!</h2>
      <AdminNotificationCenter />
    </div>
  );
}

export default DashboardHeader;
