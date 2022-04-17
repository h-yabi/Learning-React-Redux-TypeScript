import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const data = {
  labels: ['月', '火', '水', '木', '金', '土', '日'],
  datasets: [
    {
      label: 'Demo line plot',
      fill: true,
      backgroundColor: '#008080',
      borderColor: '#7fffd4',
      pointBorderWidth: 10,
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
