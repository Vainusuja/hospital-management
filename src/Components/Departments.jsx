import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  const initialDepartments = [
    {
      name: "Cardiology",
      description: "The Cardiology department specializes in diagnosing and treating heart-related conditions and diseases.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasJs2ziBAkqjvmjqfp0H5GHLSFJszme2fNQ&s",
    },
    {
      name: "Neurology",
      description: "The Neurology department focuses on disorders of the nervous system, including the brain and spinal cord.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94mk5h7_rw2rG3kYFZWOZOi4wwUl0npVy_g&s",
    },
    {
      name: "Orthopedics",
      description: "The Orthopedics department deals with conditions involving the musculoskeletal system, including bones, joints, and muscles.",
      image: "https://arvhospital.com/wp-content/uploads/2020/08/Orthopedic-Treatment-for-all-your-Joints-and-Bones-Problem.png",
    },
    {
      name: "Pediatrics",
      description: "The Pediatrics department provides medical care for infants, children, and adolescents.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90nVgfgxPEmOrenqWDN7BxS84RkSs-vD4ufl9YI_qhS0oQstADK8Ge_1AgC5c7mdrl2c&usqp=CAU",
    },
    
  ];

  const [departments, setDepartments] = useState(initialDepartments);
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // Load departments from local storage
    const storedDepartments = localStorage.getItem("departments");
    if (storedDepartments) {
      setDepartments(JSON.parse(storedDepartments));
    }
  }, []);

  useEffect(() => {
    // Save departments to local storage whenever they change
    localStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDepartment = () => {
    if (newDepartment.name && newDepartment.description && newDepartment.image) {
      setDepartments((prev) => [...prev, newDepartment]);
      setNewDepartment({ name: "", description: "", image: "" }); // Reset input fields
    }
  };

  return (
    <div className="departments-container">
      <h1 className="departments-title">Departments</h1>

      {/* List of departments */}
      <ul className="department-list">
        {departments.map((dept, index) => (
          <li key={index} className="department-item">
            <img src={dept.image} alt={dept.name } className="department-image" />
            <h2>{dept.name}</h2>
            <p>{dept.description}</p>
          </li>
        ))}
      </ul>

      {/* Form to add a new department */}
      <div className="add-department-form">
        <input
          type="text"
          name="name"
          placeholder="Department Name"
          value={newDepartment.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Department Description"
          value={newDepartment.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newDepartment.image}
          onChange={handleInputChange}
        />
        <button onClick={handleAddDepartment}>Add Department</button>
      </div>

      <Link to="/doctors">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Departments;