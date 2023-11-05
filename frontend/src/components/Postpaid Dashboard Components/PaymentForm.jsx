import React from 'react';
import './PaymentForm.css'
import { Link } from 'react-router-dom';

const PaymentForm = () => {
    return (
        <div className="payment-form-container">
            <div className="hero-image">
                <div className="wrap"></div>
                <div className="hero-text">
                    <h2>SRI-CARE Postpaid Bill Quick Pay</h2>
                    <hr />
                    <form className="form-compact" action="confirmW.php" method="post" accept-charset="UTF-8">
                        <h4>Payment Details</h4>
                        <div className="form-group row">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <label for="EventSource">Telephone/Account Number :</label>
                                <input name="EventSource" id="EventSource" className="form-control" placeholder="Telephone or Account Number" value="" type="text" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <label for="ContactNumber">Contact Number :</label>
                                <input name="ContactNumber" id="ContactNumber" className="form-control" placeholder="Contact Number" value="" type="text" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <label for="CustEmail">Email :</label>
                                <input name="CustEmail" id="CustEmail" className="form-control" placeholder="Email" value="" type="text" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <label for="vpc_Amount">Pay Amount (LKR):</label>
                                <input type="number" step="0.1" name="vpc_Amount" id="vpc_Amount" className="form-control" placeholder="Amount" value="" type="text" />
                            </div>
                        </div>
                        <input type="hidden" name="source" value="web" />
                        <div className="btn-container" >
                            <button type="submit" className="btn btn-warning" id="SubButL" name="SubButL">
                                Pay Now!
                            </button>
                            <Link to="/postpaid"> 
                            <button type="submit" className="btn btn-warning" id="SubButL" name="SubButL">
                                Cancel
                            </button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
