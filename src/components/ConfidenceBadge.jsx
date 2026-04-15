import React from 'react';

const ConfidenceBadge = ({ level, score }) => {
    let badgeColor;
    let badgeText;
    let icon;

    if (level === 'high') {
        badgeColor = 'bg-green-100 text-green-800 border-green-300';
        badgeText = 'Alta Confianza';
        icon = '✅';
    } else if (level === 'medium') {
        badgeColor = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        badgeText = 'Confianza Media';
        icon = '⚠️';
    } else {
        badgeColor = 'bg-red-100 text-red-800 border-red-300';
        badgeText = 'Baja Confianza';
        icon = '❌';
    }

    return (
        <div className={`px-3 py-1 rounded-full border ${badgeColor} text-sm font-semibold inline-flex items-center gap-2`}>
            <span>{icon}</span>
            <span>{badgeText} • {score?.toFixed(1)}%</span>
        </div>
    );
};

export default ConfidenceBadge;