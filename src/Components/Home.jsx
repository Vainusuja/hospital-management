import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios"; 
const slides = [
  {
    title: "Hospital Management System",
    content: "Welcome to our Hospital Management System, designed to streamline hospital operations and improve patient care. Our system integrates patient information, doctor schedules, and pharmacy management into one seamless platform.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/8/KD/PG/OM/138582968/product-jpeg-500x500.jpg"
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="home-container">
      <Navbar />
      <h1 className="home-title">{slides[currentSlide].title}</h1>
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="home-image"
      />
      <p>{slides[currentSlide].content}</p>

      <Link to="/dashboard">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Home;