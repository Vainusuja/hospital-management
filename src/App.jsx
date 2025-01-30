import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Pharmacy from './components/Pharmacy';
import Reports from './components/Reports';
import AdminPanel from './components/AdminPanel';

import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin" element={<AdminPanel />} />
        
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;