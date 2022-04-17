import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const data = {
  labels: ['月', '火', '水', '木', '金', '土', '日'],
  datasets: [
    {
      label: 'Demo Bar plot',
      fill: true,
      backgroundColor: '#20b2aa',
      borderColor: 'transparent',
      hoverBackgroundColor: '#5f9ea0',
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarPlot;
