import React from 'react';

const CalculateRelativeTime = ({ timestamp }) => {
    const now = new Date();
    const createdAt = new Date(timestamp);

    const timeDifference = now - createdAt;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
        return `less than a minute ago`;
    }
};

const FormatDate = ({ timestamp }) => {
    const date = new Date(timestamp);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

export { CalculateRelativeTime, FormatDate };
