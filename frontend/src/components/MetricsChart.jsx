import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function MetricsChart({ data }) {
  const chartData = {
    labels: data.map(d => d.datetime),
    datasets: [
      {
        label: 'CPU',
        data: data.map(d => d.cpu_utilization),
      },
      {
        label: 'Memory',
        data: data.map(d => d.memory_utilization),
      },
      {
        label: 'Disk',
        data: data.map(d => d.disk_utilization),
      },
    ]
  };

  return <Line data={chartData} />;
}
