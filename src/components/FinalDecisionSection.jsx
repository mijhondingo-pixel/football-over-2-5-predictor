import React from 'react';

const FinalDecisionSection = ({ topPick, recommendations }) => {
    return (
        <div className="final-decision-section">
            <h2>Final Prediction: {topPick}</h2>
            <h3>Recommendations:</h3>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default FinalDecisionSection;