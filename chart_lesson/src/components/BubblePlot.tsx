import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bubble } from 'react-chartjs-2';

Chart.register(...registerables);

const data = {
  datasets: [
    {
      label: 'React',
      backgroundColor: '#4169e1',
      borderColor: 'transparent',
      data: [
        {
          x: 20,
          y: 860,
          r: 6350000 / 100000,
        },
      ],
    },
    {
      label: 'Angular',
      backgroundColor: '#c71585',
      borderColor: 'transparent',
      data: [
        {
          x: 30,
          y: 389,
          r: 410000 / 100000,
        },
      ],
    },
    {
      label: 'Vue',
      backgroundColor: '#008080',
      borderColor: 'transparent',
      data: [
        {
          x: 10,
          y: 749,
          r: 1320000 / 100000,
        },
      ],
    },
  ],
};

// const options = {
//   title: {
//     display: true,
//     fontSize: 18,
//     text: 'NMP downloads comparison (global)',
//   },
//   scales: {
//     yAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: 'Number of job offer in LinkedIn (Japan)',
//           fontSize: 18,
//         },
//         ticks: {
//           min: 0,
//           max: 1300,
//           fontSize: 14,
//         },
//       },
//     ],
//     xAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: 'Learning Cost',
//           fontSize: 18,
//         },
//         ticks: {
//           min: 5,
//           max: 35,
//           fontSize: 14,
//         },
//       },
//     ],
//   },
// };

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

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubblePlot;
