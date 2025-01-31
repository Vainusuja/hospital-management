import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import axios from "axios"; 

const Pharmacy = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", category: "Pain Reliever", stock: 50, price: "$5" },
    { id: 2, name: "Amoxicillin", category: "Antibiotic", stock: 30, price: "$10" },
    { id: 3, name: "Metformin", category: "Diabetes", stock: 20, price: "$8" },
  ]);

  const [newMedicine, setNewMedicine] = useState({ name: "", category: "", stock: "", price: "" });
  const [error, setError] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  const addMedicine = () => {
    if (newMedicine.name && newMedicine.category && newMedicine.stock && newMedicine.price) {
      setMedicines([...medicines, { id: medicines.length + 1, ...newMedicine }]);
      setNewMedicine({ name: "", category: "", stock: "", price: "" });
      setError(""); 
      setSuccessMessage("Medicine added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
    } else {
      setError("Please fill in all fields."); 
    }
  };

  return (
    <div className="pharmacy-container">
      <h1 className="pharmacy-title">Pharmacy</h1>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <table className="pharmacy-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.category}</td>
              <td>{medicine.stock}</td>
              <td>{medicine.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-medicine-form">
        <h2>Add New Medicine</h2>
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={newMedicine.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newMedicine.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={newMedicine.stock}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newMedicine.price}
          onChange={handleChange}
        />
        <button onClick={addMedicine}>Add Medicine</button>
      </div>

      <Link to="/reports">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Pharmacy;