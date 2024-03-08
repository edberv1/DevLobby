import React, { useContext } from "react";

import { AuthContext } from '../../../utils/AuthContext'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'
import SmallChartsCombined from '../../organisms/SmallChartsCombined'
import { Navigate } from 'react-router-dom'
import UserTable from '../../molecules/UserTable'
import DashboardCardAndTaskManager from "../../organisms/DashboardCardAndTaskManager"
import ModalDemo from '../../organisms/ModalDemo'
import DashboardHeader from '../../organisms/DashboardHeader'
import "./LayoutAdmin.scss"


const AdminLayout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <div className='adminLayout'>
          <div className="sidebar-header-container">
            <Sidebar />
            <DashboardHeader />
          </div>
          <ModalDemo />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
          <DashboardCardAndTaskManager />
          <UserTable></UserTable>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminLayout;
