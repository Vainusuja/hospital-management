import React from "react";


const Reports = () => {
  // Sample report data
  const [reports, setReports] = useState([
    { id: 1, title: "Monthly Patient Report", type: "Patient", date: "2024-01-01" },
    { id: 2, title: "Financial Overview", type: "Finance", date: "2024-01-10" },
    { id: 3, title: "Medicine Inventory", type: "Pharmacy", date: "2024-01-15" },
  ]);

  const [newReport, setNewReport] = useState({ title: "", type: "" });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  // Add a new report
  const addReport = () => {
    if (newReport.title && newReport.type) {
      setReports([...reports, { id: reports.length + 1, ...newReport, date: new Date().toISOString().split("T")[0] }]);
      setNewReport({ title: "", type: "" });
      setError(""); // Clear error message
    } else {
      setError("Please fill in all fields."); // Set error message
    }
  };

  // Simulate report download
  const downloadReport = (report) => {
    alert(`Downloading: ${report.title}`);
  };

  return (
    <div className="reports-container">
      <h1 className="reports-title">Reports</h1>
      

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Reports Table */}
      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.type}</td>
              <td>{report.date}</td>
              <td>
                <button className="download-btn" onClick={() => downloadReport(report)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Report Form */}
      <div className="add-report-form">
        <h2>Create New Report</h2>
        <input
          type="text"
          name="title"
          placeholder="Report Title"
          value={newReport.title}
          onChange={handleChange}
        />
        <select name="type" value={newReport.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Patient">Patient</option>
          <option value="Finance">Finance</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Operations">Operations</option>
        </select>
        <button onClick={addReport}>Generate Report</button>
      </div>
    </div>
  );
};

export default Reports;