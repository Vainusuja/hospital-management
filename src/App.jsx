import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import your components
import Account from './Components/Account';
import AdminPanel from './Components/AdminPanel';
import Dashboard from './Components/Dashboard';
import Departments from './Components/Departments';
import Doctors from './Components/Doctors';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Patients from './Components/Patients';
import Pharmacy from './Components/Pharmacy';
import Reports from './Components/Reports';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;