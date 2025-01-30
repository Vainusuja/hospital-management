import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/" className="navbar-button">Home</Link>
        <Link to="/dashboard" className="navbar-button">Dashboard</Link>
        <Link to="/departments" className="navbar-button">Departments</Link>
        <Link to="/doctors" className="navbar-button">Doctors</Link>
        <Link to="/patients" className="navbar-button">Patients</Link>
        <Link to="/pharmacy" className="navbar-button">Pharmacy</Link>
        <Link to="/reports" className="navbar-button">Reports</Link>
        <Link to="/admin" className="navbar-button">Admin Panel</Link>
        <Link to="/account" className="navbar-button">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;