import React, { useState } from 'react';
import './Header.css'; // Import the custom CSS file
import notification from './notification.png'

export default function Header() {
    const [notifications, setNotifications] = useState([
        'Appointment Reminder 04',
        'Update Your Profile Details',
        'Important Update Available',
    ]);

    const handleLogout = () => {
        // Handle logout logic here
    };

    return (
        <div className="header">
            <div className="app-title">
                <h1>SRI-CARE</h1>
            </div>
            <div className="actions">
                <button className="notification-icon" style={{ backgroundImage: `url(${notification})` }}></button>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
