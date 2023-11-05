import React from "react";
// import "./BillingModal.css"; 

const BillingModal = ({ bill, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Billing Details</h2>
        <p>Title: {bill.title}</p>
        <p>Total Amount: {bill.totalAmount}</p>
        <p>Date: {bill.date}</p>
        {/* Additional details as needed */}
        <button onClick={closeModal}>Close</button>
        <button>Pay</button>
      </div>
    </div>
  );
};

export default BillingModal;
