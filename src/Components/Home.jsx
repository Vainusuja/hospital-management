import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation


const Home = () => {
  const history = useHistory(); // Initialize useHistory

  // Function to handle login button click
  const handleLogin = () => {
    history.push("/login"); // Redirect to the login page
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Hospital Management System</h1>
      <img 
        src="https://5.imimg.com/data5/SELLER/Default/2024/11/465399076/ZI/BT/YE/1410239/online-hospital-software-500x500.jpg" 
        alt="Hospital Management System" 
        className="home-image"
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;