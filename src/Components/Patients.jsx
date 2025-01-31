import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Patients = () => {
  // Sample patient data
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 35, condition: "Flu", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", age: 28, condition: "Fracture", contact: "987-654-3210" },
    { id: 3, name: "Robert Brown", age: 42, condition: "Diabetes", contact: "456-789-0123" },
  ]);

  // New patient details
  const [newPatient, setNewPatient] = useState({ name: "", age: "", condition: "", contact: "" });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  // Add a new patient
  const addPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.condition && newPatient.contact) {
      setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
      setNewPatient({ name: "", age: "", condition: "", contact: "" });
      setError(""); // Clear error message
    } else {
      setError("Please fill in all fields."); // Set error message
    }
  };

  return (
    <div className="patients-container">
      <h1 className="patients-title">Patients</h1>
      
      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Patient List Table */}
      <table className="patients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
              <td>{patient.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Patient Form */}
      <div className="add-patient-form">
        <h2>Add a New Patient</h2>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={newPatient.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPatient.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="condition"
          placeholder="Condition"
          value={newPatient.condition}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={newPatient.contact}
          onChange={handleChange}
        />
        <button onClick={addPatient} className="add-patient-btn">Add Patient</button>
      </div>

      <Link to="/pharmacy">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Patients;
