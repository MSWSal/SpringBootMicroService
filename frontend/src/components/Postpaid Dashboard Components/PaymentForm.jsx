import React, { useEffect, useState } from 'react';
import '../Postpaid Dashboard Components/PaymentForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const PaymentForm = () => {

  const [accno, setAccNo] = useState("");
  const [email, setEmail] = useState("");
  const [service, setSerivce] = useState("Bill Payment");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setAmount(localStorage.getItem("bill"));
  }, [])

  const handleSubmit = () => {
    console.log(accno, email, service, amount);

    axios.post("http://localhost:8222/api/v1/payment/" + accno + "/" + email + "/" + service + "/" + amount)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          alert(res.data);
          axios.post("http://localhost:8222/api/v1/notification/" + email)
            .then(res => {
              console.log(res.data);
            }).catch(err => {
              console.log(err);
            })
          setAccNo("");
          setEmail("");
          setSerivce("");
          setAmount("");
        }

      }).catch(err => {
        console.log(err);
      })

  }

  return (
    <div className="payment-form-container">
      <div className="hero-image">
        <div className="wrap"></div>
        <div className="hero-text">
          <h2>SRI-CARE Postpaid Bill Quick Pay</h2>
          <hr />
          <h4>Payment Details</h4>
          <div className="form-group row">
            <div className="form-group col-md-12 col-sm-12 col-xs-12">
              <label for="EventSource">Telephone/Account Number :</label>
              <input
                name="EventSource"
                id="EventSource"
                className="form-control"
                placeholder="Telephone or Account Number"
                type="text"
                onChange={(e) => setAccNo(e.target.value)}
                value={accno}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-group col-md-12 col-sm-12 col-xs-12">
              <label for="CustEmail">Email :</label>
              <input
                name="CustEmail"
                id="CustEmail"
                className="form-control"
                placeholder="Email"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-group col-md-12 col-sm-12 col-xs-12">
              <label for="service">Select the Service:</label>
              <select
                name="service"
                id="service"
                className="form-control"
                value={service}
                onChange={(e) => setSerivce(e.target.value)}
              >
                <option value="Voice Package">Bill Payment</option>
                <option value="Voice Package">Voice Package</option>
                <option value="SMS Package">SMS Package</option>
                <option value="Data Package">Data Package</option>
                <option value="Roaming Package">Roaming Package</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-group col-md-12 col-sm-12 col-xs-12">
              <label for="vpc_Amount">Pay Amount (LKR):</label>
              <input
                type="text"
                step="0.1"
                name="vpc_Amount"
                id="vpc_Amount"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <input type="hidden" name="source" value="web" />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-warning"
              id="SubButL"
              name="SubButL"
              onClick={handleSubmit}
            >
              Pay Now!
            </button>
            <Link to="/postpaid">
              <button
                type="button"
                className="btn btn-warning"
                id="SubButL"
                name="SubButL"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
