import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Postpaid from "./pages/PostpaidDashboard";
import Login from "./pages/Login";
import PostPaymentForm from "./components/Postpaid Dashboard Components/PaymentForm";
import Prepaid from "./pages/Prepaid Dashboard";
import PrePaymentForm from "./components/Prepaid Dashboard Components/PaymentForm";
import Billing from "./pages/Billing";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            {/* Define your routes here */}
          <Route path="/postpaid" element={<Postpaid />} />
          <Route path="/prepaid" element={<Prepaid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postPayment" element={<PostPaymentForm />} />
          <Route path="/prePayment" element={<PrePaymentForm />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
