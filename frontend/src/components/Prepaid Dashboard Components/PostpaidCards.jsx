import React from 'react';
import { Link } from 'react-router-dom';
import prepaidImage from './prepaid.png';
import Button from '@mui/material/Button';
import '../Postpaid Dashboard Components/PrepaidCards.css'
import ToggleSwitch from '../Postpaid Dashboard Components/ToggleSwitch'; 

export default function PostpaidCards() {
    return (
        <div className="page-container">
            <div className="horizontal-bar"></div>
            <div className="dashboard-title-lines">
                <h1 className="dashboard-title">Prepaid Dashboard</h1>
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
                    <h1 className="additional-title">Instantly pay your SRI-CARE Prepaid Connection bill online</h1>
                    <p className="additional-paragraph">We accept VISA, Master & Amex card payments. Please note that the payments settled using credit cards issued in foreign countries will not be updated until SRI-CARE receives the payment confirmation from the particular foreign bank.</p>
                    <Link to="/prePayment">
                        <Button className="pay-now-button" variant="contained">
                            Pay From Here
                        </Button>
                    </Link>
                </div>
                <div className="additional-image">
                    <img src={prepaidImage} alt="Your Image" />
                </div>
            </div>
        </div>
    );
}
