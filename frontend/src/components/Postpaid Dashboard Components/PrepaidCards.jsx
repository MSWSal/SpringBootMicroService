import React from 'react';
import './PrepaidCards.css'; // Import the custom CSS file
import prepaidImage from './prepaid.png'; // Import your image

export default function PrepaidCards() {
    return (
        <div className="page-container">
            <div className="prepaid-cards-container">
                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Total Balance</p>
                        <p className="card-amount">Rs. 1000.00</p>
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Monthly Income</p>
                        <p className="card-amount">Rs. 1500.00</p>
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Total Withdraw</p>
                        <p className="card-amount">Rs. 500.00</p>
                    </div>
                </div>

                <div className="prepaid-card">
                    <div className="card-content">
                        <p className="card-title">Card 4 Title</p>
                        <p className="card-amount">Rs. 2000.00</p>
                    </div>
                </div>
            </div>

            <div className="additional-content">
                <div className="additional-text">
                    <h1 className="additional-title">Instantly pay your SRI-CARE Fixed Connection bill online</h1>
                    <p className="additional-paragraph">We accept VISA, Master & Amex card payments. Please note that the payments settled using credit cards issued in foreign countries will not be updated until SLT-MOBITEL receives the payment confirmation from the particular foreign bank.</p>
                </div>
                <div className="additional-image">
                    <img src={prepaidImage} alt="Your Image" /> {/* Use the imported image */}
                </div>
            </div>
        </div>
    );
}
