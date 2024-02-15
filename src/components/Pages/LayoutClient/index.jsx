import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../molecules/Navbar";
import Newsletter from "../../molecules/Newsletter";

const ClientLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Newsletter />
      </div>
    </>
  );
};

export default ClientLayout;
