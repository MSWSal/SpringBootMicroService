import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './PrepaidCards.css'; // Import the custom CSS file
import prepaidImage from './prepaid.png'; // Import your image
import Button from '@mui/material/Button';
import ToggleSwitch from './ToggleSwitch'; 

export default function PrepaidCards() {
    return (
        <div className="page-container">
        <div className="horizontal-bar"></div>
        <div className="dashboard-title-lines">
            <h1 className="dashboard-title">Postpaid Dashboard</h1>
        </div>
        <div className="horizontal-bar"></div>
        <br />
        <br /> {/* Add spacing here */}
        <div className="prepaid-cards-container">
            <br />
            <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Voice Package</p>
                        <p className="card-amount">Rs. 1000.00</p>
                        <ToggleSwitch />
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Data Package</p>
                        <p className="card-amount">Rs. 1500.00</p>
                        <ToggleSwitch />
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">SMS Package</p>
                        <p className="card-amount">Rs. 500.00</p>
                        <ToggleSwitch />
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Roaming Package</p>
                        <p className="card-amount">Rs. 2000.00</p>
                        <ToggleSwitch />
                    </div>
                </div>
            </div>

            <div className="additional-content">
                <div className="additional-text">
                    <h1 className="additional-title">Instantly pay your SRI-CARE Postpaid Connection bill online</h1>
                    <p className="additional-paragraph">We accept VISA, Master & Amex card payments. Please note that the payments settled using credit cards issued in foreign countries will not be updated until SRI-CARE receives the payment confirmation from the particular foreign bank.</p>
                    <Link to="/postPayment"> {/* Use Link to navigate to /payment */}
                        <Button className="pay-now-button" variant="contained">
                            Pay From Here
                        </Button>
                    </Link>
                </div>
                <div className="additional-image">
                    <img src={prepaidImage} alt="Your Image" /> {/* Use the imported image */}
                </div>
            </div>
        </div>
    );
}
