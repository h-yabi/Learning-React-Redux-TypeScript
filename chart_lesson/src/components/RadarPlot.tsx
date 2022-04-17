import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';

Chart.register(...registerables);

const data = {
  labels: [
    'React',
    'Vue',
    'Angular',
    'JavaScript',
    'TypeScript',
    'Redux',
    'REST API',
  ],
  datasets: [
    {
      label: 'Aさん',
      fill: true,
      backgroundColor: 'rgba(179, 181, 198, 0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b',
      pointBorderColor: '#fff',
      data: [100, 30, 20, 80, 70, 40, 50],
    },
    {
      label: 'Bさん',
      fill: true,
      backgroundColor: 'rgba(179, 181, 198, 0.2)',
      borderColor: '#ff1493',
      pointBackgroundColor: '#ff1493',
      pointBorderColor: '#fff',
      data: [10, 70, 40, 50, 100, 30, 20],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
