// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Dummy registration logic
    console.log("Registered User:", form);
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">📝 Register</h3>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
