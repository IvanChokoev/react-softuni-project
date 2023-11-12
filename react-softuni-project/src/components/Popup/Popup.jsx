import React from 'react';
import './Popup.css';

const Popup = ({ title, message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <div className="popup-header">
                    <h3>{title}</h3>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="popup-content">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Popup;