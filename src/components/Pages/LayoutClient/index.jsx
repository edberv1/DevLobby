import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../molecules/Navbar";
import Footer from "../../molecules/Footer";

const ClientLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
