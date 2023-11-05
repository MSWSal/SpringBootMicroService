import React, { useState } from "react";
import BillingModal from "./BillingModal"; // Import the BillingModal component
import billingImage from "./billing.png";
import "./BillingCard.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function BillingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  // Function to open the modal and set the selected bill
  const openModal = (bill) => {
    setSelectedBill(bill);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBill(null);
    setIsModalOpen(false);
  };

  const billingData = [
    { title: "Bill 01", totalAmount: "Rs. 1000.00", date: "2023-11-31" },
    { title: "Bill 02", totalAmount: "Rs. 5000.00", date: "2023-12-15" },
    { title: "Bill 03", totalAmount: "Rs. 1500.00", date: "2023-10-31" },
    { title: "Bill 04", totalAmount: "Rs. 1450.00", date: "2023-12-15" },
    // Add more billing data as needed
  ];

  return (
    <div>
      <div className="page-container">
        <div className="billing-card-container">
          {billingData.map((bill, index) => (
            <div key={index} className="billing-card">
              <div className="card-content">
                <p className="card-title">{bill.title}</p>
                <p className="card-amount">Total Amount: {bill.totalAmount}</p>
                <button
                  className="billing-card-btn"
                  onClick={() => openModal(bill)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="additional-content">
          <div className="additional-text">
            <h1 className="additional-title">
              Instantly pay your SRI-CARE Fixed Connection bill online
            </h1>
            <p className="additional-paragraph">
              We accept VISA, Master & Amex card payments. Please note that the
              payments settled using credit cards issued in foreign countries
              will not be updated until SLT-MOBITEL receives the payment
              confirmation from the particular foreign bank.
            </p>
          </div>
          <div className="additional-image">
            <img src={billingImage} alt="Your Image" />{" "}
            {/* Use the imported image */}
          </div>
        </div>

        {/* Billing Modal */}
        <Dialog open={isModalOpen} onClose={closeModal}>
          <DialogTitle>Billing Details</DialogTitle>
          <DialogContent>
            <p>No: {selectedBill?.title}</p>
            <p>Total Amount: {selectedBill?.totalAmount}</p>
            <p>Date: {selectedBill?.date}</p>
            {/* Additional details as needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button color="primary">Pay</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default BillingCard;
