import React, { useState } from 'react';
import './Header.css'; // Import the custom CSS file
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import Material-UI notification icon
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        'Appointment Reminder 04',
        'Update Your Profile Details',
        'Important Update Available',
    ]);

    const handleLogout = () => {
        // Handle logout logic here
        navigate("/");
    };

    const handleBillings = () => {
        navigate("/billing");
    }

    return (
        <div className="header">
            <div className="app-title">
                <h1>SRI-CARE</h1>
            </div>
            <div className="actions">
                <NotificationsIcon className="notification-icon" />
                <button className="logout-button" onClick={handleBillings}>
                    Bills
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
