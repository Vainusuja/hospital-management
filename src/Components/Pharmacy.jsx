import React from "react";


const Pharmacy = () => {
  // Sample pharmacy inventory
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", category: "Pain Reliever", stock: 50, price: "$5" },
    { id: 2, name: "Amoxicillin", category: "Antibiotic", stock: 30, price: "$10" },
    { id: 3, name: "Metformin", category: "Diabetes", stock: 20, price: "$8" },
  ]);

  // New medicine details
  const [newMedicine, setNewMedicine] = useState({ name: "", category: "", stock: "", price: "" });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  // Add new medicine to inventory
  const addMedicine = () => {
    if (newMedicine.name && newMedicine.category && newMedicine.stock && newMedicine.price) {
      setMedicines([...medicines, { id: medicines.length + 1, ...newMedicine }]);
      setNewMedicine({ name: "", category: "", stock: "", price: "" });
      setError(""); // Clear error message
    } else {
      setError("Please fill in all fields."); // Set error message
    }
  };

  return (
    <div className="pharmacy-container">
      <h1 className="pharmacy-title">Pharmacy</h1>
      

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Medicine Inventory Table */}
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

      {/* Add New Medicine Form */}
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
    </div>
  );
};

export default Pharmacy;