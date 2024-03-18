import React, { useContext } from "react";
import { AuthContext } from "../../../utils/AuthContext";
import { Navigate } from "react-router-dom";
import Sidebar from "../../molecules/Sidebar";
import AdminHeaderComponent from "../../molecules/AdminHeaderComponent/index";
import BigChartAndStats from "../../organisms/BigChartAndStats";
import SmallChartsCombined from "../../organisms/SmallChartsCombined";
import UserTable from "../../molecules/UserTable";
import ModalDemo from "../../organisms/ModalDemo";
import DashboardCardAndTaskManager from "../../organisms/DashboardCardAndTaskManager";

const AdminLayout = () => {
  const { token, logout } = useContext(AuthContext);

  // If token exists and is valid render the admin layout otherwise stay in admin form 
  return (
    <>
      {token ? (
        <div className="adminLayout">
          <Sidebar />
          <button onClick={logout}>Logout</button>
          <ModalDemo />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
          <DashboardCardAndTaskManager />
          <UserTable></UserTable>
        </div>
      ) : (
        <Navigate to="/adminLogin" />
      )}
    </>
  );
};

export default AdminLayout;
