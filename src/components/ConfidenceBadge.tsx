import React from 'react';

interface ConfidenceBadgeProps {
    confidence: 'high' | 'medium' | 'low';
}

const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({ confidence }) => {
    let badgeStyle;

    switch (confidence) {
        case 'high':
            badgeStyle = { backgroundColor: 'green', color: 'white' };
            break;
        case 'medium':
            badgeStyle = { backgroundColor: 'yellow', color: 'black' };
            break;
        case 'low':
            badgeStyle = { backgroundColor: 'red', color: 'white' };
            break;
        default:
            badgeStyle = {};
    }

    return (
        <span style={{ ...badgeStyle, padding: '5px 10px', borderRadius: '5px' }}>
            {confidence.charAt(0).toUpperCase() + confidence.slice(1)} Confidence
        </span>
    );
};

export default ConfidenceBadge;
