import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/" className={`navbar-button ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/dashboard" className={`navbar-button ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/departments" className={`navbar-button ${location.pathname === '/departments' ? 'active' : ''}`}>Departments</Link>
        <Link to="/doctors" className={`navbar-button ${location.pathname === '/doctors' ? 'active' : ''}`}>Doctors</Link>
        <Link to="/patients" className={`navbar-button ${location.pathname === '/patients' ? 'active' : ''}`}>Patients</Link>
        <Link to="/pharmacy" className={`navbar-button ${location.pathname === '/pharmacy' ? 'active' : ''}`}>Pharmacy</Link>
        <Link to="/reports" className={`navbar-button ${location.pathname === '/reports' ? 'active' : ''}`}>Reports</Link>
        <Link to="/admin" className={`navbar-button ${location.pathname === '/admin' ? 'active' : ''}`}>Admin Panel</Link>
        <Link to="/account" className={`navbar-button ${location.pathname === '/account' ? 'active' : ''}`}>Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;