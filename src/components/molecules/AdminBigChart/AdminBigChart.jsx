import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import jsonData from './Constants/data.json';
import './AdminBigChart.scss'; 

const AdminBigChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setChartData({
      labels: jsonData.map((item) => item.week),
      datasets: [
        {
          label: 'User Registrations',
          data: jsonData.map((item) => item.registrations),
          borderColor: 'rgba(0, 123, 255, 1)', 
          backgroundColor: 'rgba(0, 51, 160, 0.5)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          borderCapStyle: 'round',
          borderJoinStyle: 'round',
        },
      ],
    });
  }, []);

  return (
    <div className="admin-big-chart-container">
      <h2 className="admin-big-chart-heading">User Registrations Chart</h2>
      <div className="admin-big-chart">
        {chartData.labels && <Line data={chartData} options={{
          scales: {
            y: {
              grid: {
                color: 'rgba(255, 255, 255, 0.5)' 
              },
              ticks: {
                color: '#ffffff' 
              }
            },
            x: {
              grid: {
                color: 'rgba(255, 255, 255, 0.5)' 
              },
              ticks: {
                color: '#ffffff' 
              }
            }
          }
        }} />}
      </div>
    </div>
  );
};

export default AdminBigChart;
