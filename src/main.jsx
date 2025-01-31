import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import Doctors from "./Components/Doctors";
import Patients from "./Components/Patients";
import Pharmacy from "./Components/Pharmacy";
import Reports from "./Components/Reports";
import Departments from "./Components/Departments";
import AdminPanel from "./Components/AdminPanel";
import Dashboard from "./Components/Dashboard";
import Account from "./Components/Account";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Defining Routes */}
      <Route path="/" element={<Home />} />
      
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </BrowserRouter>
);
