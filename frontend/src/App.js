import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Postpaid from "./pages/PostpaidDashboard";
import Login from "./pages/Login";
import PaymentForm from "./components/Postpaid Dashboard Components/PaymentForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/postpaid" element={<Postpaid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
