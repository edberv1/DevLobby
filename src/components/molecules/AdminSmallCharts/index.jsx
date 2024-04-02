import React from 'react'
import { Line } from 'react-chartjs-2'
import '../../organisms/SmallChartsCombined/SmallChartsCombined.scss'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

const Chart = ({ data, title, lineColor, fillColor }) => {
  return (
    <div className='chart-container'>
      <h3 className='chart-title'>{title}</h3>
      <div className='chart'>
        <Line
          data={{
            labels: data.map(item => item.date),
            datasets: [
              {
                label: title,
                data: data.map(
                  item => item.logins || item.payments || item.feedbacks
                ),
                borderColor: `rgba(${lineColor})`,
                backgroundColor: `rgba(${fillColor}, 0.5)`,
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                borderCapStyle: 'round',
                borderJoinStyle: 'round'
              }
            ]
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
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
          }}
        />
      </div>
    </div>
  )
}

export default Chart
