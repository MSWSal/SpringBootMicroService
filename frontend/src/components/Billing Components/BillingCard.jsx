import React, { useState, useEffect } from "react";
import BillingModal from "./BillingModal"; // Import the BillingModal component
import billingImage from "./billing.png";
import "./BillingCard.css";
import axios from 'axios'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from 'react-router-dom'

function BillingCard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [res, setRes] = useState([]);

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

  useEffect(() => {
    axios.get("http://localhost:8222/api/v1/billing")
      .then(res => {
        console.log(res.data);
        setRes(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  const handlePay = () => {
    const user = localStorage.getItem("user");
    const numericPart = parseFloat(selectedBill.totalAmount.replace("Rs.", "").trim());
    
    if (user === "postpaid") {
      localStorage.setItem("bill", numericPart);
      navigate("/postPayment");
    }
    if (user === "prepaid") {
      localStorage.setItem("bill", numericPart);
      navigate("/prePayment");
    }

  }

  return (
    <div>
      <div className="page-container">
        <div className="billing-card-container">
          {res.map((bill, index) => (
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
            <Button color="primary" onClick={handlePay}>Pay</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default BillingCard;
