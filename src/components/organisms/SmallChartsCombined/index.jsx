import React from 'react';
import jsonData from '../../molecules/AdminSmallCharts/Constants/Data.json';
import Chart from '../../molecules/AdminSmallCharts/index';
import './SmallChartsCombined.scss'

const SmallChartsCombined = () => {
  return (
    <div className='charts-container'>
      <Chart data={jsonData.userLogins} title="User Logins" lineColor="255, 99, 132" fillColor="255, 99, 132" />
      <Chart data={jsonData.userPayments} title="User Payments" lineColor="255, 159, 64" fillColor="255, 159, 64" />
      <Chart data={jsonData.userFeedbacks} title="User Feedbacks" lineColor="75, 192, 192" fillColor="75, 192, 192" />
    </div>
  );
};

export default SmallChartsCombined;
