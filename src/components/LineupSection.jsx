import React from 'react';
import { CircularProgress } from '@material-ui/core';

const LineupSection = ({ teamFormation, isLoading }) => {
  return (
    <div className="lineup-section">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="lineup"> 
          <h2>Team Formation: {teamFormation}</h2>
          {/* Lineup display logic goes here */}
        </div>
      )}
    </div>
  );
};

export default LineupSection;