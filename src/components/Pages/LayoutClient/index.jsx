import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/Navbar'

const ClientLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default ClientLayout;
