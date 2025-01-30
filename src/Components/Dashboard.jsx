import React from "react";


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

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn">Add Patient</button>
          <button className="action-btn">Schedule Appointment</button>
          <button className="action-btn">Manage Doctors</button>
          <button className="action-btn">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;