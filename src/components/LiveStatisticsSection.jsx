import React from 'react';
import { Bar } from 'react-chartjs-2';

const LiveStatisticsSection = ({ stats }) => {
  const { possession, shots, shotsOnTarget } = stats;

  const possessionData = {
    labels: ['Team A', 'Team B'],
    datasets: [{
      label: 'Possession',
      data: [possession.teamA, possession.teamB],
      backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
    }],
  };

  const shotsData = {
    labels: ['Shots', 'Shots on Target'],
    datasets: [{
      label: 'Match Stats',
      data: [shots.total, shotsOnTarget],
      backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
    }],
  };

  return (
    <div>
      <h2>Live Match Statistics</h2>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h3>Possession</h3>
        <Bar data={possessionData} />
      </div>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h3>Shots Statistics</h3>
        <Bar data={shotsData} />
      </div>
    </div>
  );
};

export default LiveStatisticsSection;