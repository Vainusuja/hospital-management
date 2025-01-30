import React from "react";


const Departments = () => {
  // Sample list of hospital departments with descriptions and images
  const departments = [
    {
      name: "Cardiology",
      description: "The Cardiology department specializes in diagnosing and treating heart-related conditions and diseases.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasJs2ziBAkqjvmjqfp0H5GHLSFJszme2fNQ&s" // Replace with actual image URL
    },
    {
      name: "Neurology",
      description: "The Neurology department focuses on disorders of the nervous system, including the brain and spinal cord.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94mk5h7_rw2rG3kYFZWOZOi4wwUl0npVy_g&s" // Replace with actual image URL
    },
    {
      name: "Orthopedics",
      description: "The Orthopedics department deals with conditions involving the musculoskeletal system, including bones, joints, and muscles.",
      image: "https://arvhospital.com/wp-content/uploads/2020/08/Orthopedic-Treatment-for-all-your-Joints-and-Bones-Problem.png" // Replace with actual image URL
    },
    {
      name: "Pediatrics",
      description: "The Pediatrics department provides medical care for infants, children, and adolescents.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90nVgfgxPEmOrenqWDN7BxS84RkSs-vD4ufl9YI_qhS0oQstADK8Ge_1AgC5c7mdrl2c&usqp=CAU" // Replace with actual image URL
    },
    
  ];

  return (
    <div className="departments-container">
      <h1 className="departments-title">Departments</h1>
      

      {/* List of departments */}
      <ul className="department-list">
        {departments.map((dept, index) => (
          <li key={index} className="department-item">
            <img src={dept.image} alt={dept.name} className="department-image" />
            <h2>{dept.name}</h2>
            <p>{dept.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;