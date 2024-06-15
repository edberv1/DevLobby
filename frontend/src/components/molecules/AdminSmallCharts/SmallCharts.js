import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import jsonData from './Constants/Data.json'
import { Chart as ChartJS } from 'chart.js/auto';

const SmallCharts = ({ title, Data = [], dataKey, lineColor, bgColor }) => {
    const [chartData, setChartData] = useState({});
  
    useEffect(() => {
      if (Data && Data.length > 0) {
        const chartData = {
          labels: Data.map(item => item.date),
          datasets: [
            {
              label: title,
              data: Data.map(item => item[dataKey]),
              borderColor: lineColor,
              backgroundColor: bgColor,
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              borderCapStyle: 'round',
              borderJoinStyle: 'round',
            },
          ],
        };
        setChartData(chartData);
      }
    }, [Data, title, dataKey, lineColor, bgColor]);
  
    if (!Data || Data.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="user-activity-chart">
        <h2>{title}</h2>
        <Line data={chartData} />
      </div>
    );
  };  

export default SmallCharts;