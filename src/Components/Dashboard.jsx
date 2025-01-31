import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Dashboard = () => {
  // Sample statistics
  const stats = [
    { title: "Doctors", count: 15 },
    { title: "Patients", count: 120 },
    { title: "Nurses", count: 30 },
    { title: "Appointments", count: 45 },
    { title: "Departments", count: 8 },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <p className="dashboard-subtitle">Manage hospital operations here.</p>

      {/* Statistics Section */}
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <p className="stat-count">{stat.count}</p>
          </div>
        ))}
      </div>

      
        <Link to="/departments">
                <button className="next-button">Next</button>
              </Link>
      </div>
    
  );
};

export default Dashboard;