import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddExpensePage = () => {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses", {
        ...form,
        amount: parseFloat(form.amount),
      });
      setMessage("Expense added successfully.");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error("Add error:", err.message);
      setMessage("Failed to add expense. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-5 shadow-lg rounded-4 w-100"
        style={{
          maxWidth: "500px",
          animation: "fadeSlideIn 0.7s ease-out",
          backgroundColor: "#ffffff",
        }}
      >
        <h3 className="text-center text-primary mb-2 fw-bold">
          Add New Expense
        </h3>
        <p className="text-center text-muted mb-4">
          Fill in the details below to track your spending.
        </p>

        {message && (
          <div
            className={`alert text-center fw-medium ${
              message.includes("successfully") ? "alert-success" : "alert-danger"
            } animate__animated animate__fadeInDown`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
          <div className="form-group mb-3">
            <label className="fw-semibold">Expense Title</label>
            <input
              type="text"
              className="form-control shadow-sm transition"
              placeholder="e.g. Grocery shopping"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="fw-semibold">Amount Spent (₹)</label>
            <input
              type="number"
              className="form-control shadow-sm transition"
              placeholder="e.g. 500"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="fw-semibold">Category</label>
            <input
              type="text"
              className="form-control shadow-sm transition"
              placeholder="e.g. Food, Transport, Rent"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold shadow-sm"
            style={{ borderRadius: "25px", transition: "0.3s" }}
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Custom Animation CSS */}
      <style>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .transition {
          transition: all 0.25s ease;
        }

        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default AddExpensePage;
