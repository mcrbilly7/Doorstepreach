// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stepper from './pages/Stepper';
import Business from './pages/Business';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/business" element={<Business />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
