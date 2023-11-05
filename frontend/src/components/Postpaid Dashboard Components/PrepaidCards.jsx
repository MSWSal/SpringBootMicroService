import React from 'react';
import './PrepaidCards.css'; // Import the custom CSS file

export default function PrepaidCards() {
  return (
    <div className="prepaid-card">
      <div className="card-content">
        <p className="card-title">Total Balance</p>
        <p className="card-amount">Rs. 1000.00</p>
      </div>
    </div>
  );
}
