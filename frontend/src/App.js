import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Postpaid from "./pages/PostpaidDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/postpaid" element={<Postpaid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
