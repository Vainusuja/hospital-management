import React, { useState } from "react"; // Add useState import here
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Doctors = () => {
  // Sample doctor data
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John Smith", specialty: "Cardiology", contact: "123-456-7890" },
    { id: 2, name: "Dr. Sarah Johnson", specialty: "Neurology", contact: "987-654-3210" },
    { id: 3, name: "Dr. Mark Williams", specialty: "Orthopedics", contact: "456-789-0123" },
  ]);

  // New doctor details
  const [newDoctor, setNewDoctor] = useState({ name: "", specialty: "", contact: "" });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  // Add a new doctor
  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialty && newDoctor.contact) {
      setDoctors([...doctors, { id: doctors.length + 1, ...newDoctor }]);
      setNewDoctor({ name: "", specialty: "", contact: "" });
      setError(""); // Clear error message
    } else {
      setError("Please fill in all fields."); // Set error message
    }
  };

  return (
    <div className="doctors-container">
      <h1 className="doctors-title">Doctors</h1>
      <p>Manage the list of doctors here.</p>

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Doctor List Table */}
      <table className="doctors-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Doctor Form */}
      <div className="add-doctor-form">
        <h2>Add a New Doctor</h2>
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={newDoctor.contact}
          onChange={handleChange}
        />
        <button onClick={addDoctor}>Add Doctor</button>
      </div>
      <Link to="/patients">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Doctors;
