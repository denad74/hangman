import React from 'react';

const Notification = ({showMessage}) => {
    return (
        <div className={`notification-container ${showMessage ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    );
};

export default Notification;