import React, { useContext } from "react";
import { AuthContext } from "../../../utils/AuthContext";
import { DarkModeContext } from "../../../utils/DarkModeContext"; // Import DarkModeContext
import AdminHeaderComponent from "../../molecules/AdminHeaderComponent/index";
import Sidebar from "../../molecules/Sidebar";
import BigChartAndStats from "../../organisms/BigChartAndStats";
import SmallChartsCombined from "../../organisms/SmallChartsCombined";
import { Navigate } from "react-router-dom";
import UserTable from "../../molecules/UserTable";
import DashboardCard from "../../molecules/DashboardCard";
import ModalDemo from "../../organisms/ModalDemo";
import "./LayoutAdmin.scss";

const AdminLayout = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { isDarkMode } = useContext(DarkModeContext); // Use DarkModeContext

  return (
    <>
      {isLoggedIn ? (
        <div className={isDarkMode ? "adminLayout dark-mode" : "adminLayout"}>
          <Sidebar />
          <button onClick={logout}>Logout</button>
          <ModalDemo />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
          <DashboardCard title={"Generic card"} />
          <UserTable></UserTable>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminLayout;
