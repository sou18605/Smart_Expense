// Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setMessage("Failed to fetch expenses.");
      setLoading(false);
    }
  };

  const addExpense = async (form) => {
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", {
        ...form,
        amount: parseFloat(form.amount),
      });
      setExpenses((prevExpenses) => [res.data, ...prevExpenses]);
      setMessage("Expense added successfully.");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Add error:", err.message);
      setMessage("Failed to add expense. Try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses((prev) => prev.filter((e) => e._id !== id));
      setMessage("Expense deleted successfully.");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Delete error:", err.message);
      setMessage("Failed to delete expense.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const marginLeft = 15;
    const marginTop = 20;
    const companyName = "SmartExpense Inc.";
    const reportDate = new Date().toLocaleDateString();
    const contactInfo = "Contact: support@smartexpense.com | +91-8967867874";

    doc.setFillColor(33, 150, 243);
    doc.rect(marginLeft, marginTop, 180, 30, "F");

    doc.setTextColor(255);
    doc.setFontSize(18);
    doc.text(companyName, marginLeft + 5, marginTop + 10);
    doc.setFontSize(11);
    doc.text(`Date: ${reportDate}`, marginLeft + 5, marginTop + 17);
    doc.text(contactInfo, marginLeft + 5, marginTop + 24);

    doc.setTextColor(40);
    doc.setFontSize(14);
    doc.text("Expense Report", marginLeft, marginTop + 40);

    autoTable(doc, {
      startY: marginTop + 45,
      margin: { left: marginLeft },
      head: [["Title", "Amount", "Category", "Date"]],
      body: expenses.map((exp) => [
        exp.title,
        `₹${exp.amount}`,
        exp.category,
        new Date(exp.date).toLocaleDateString(),
      ]),
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [63, 81, 181], textColor: 255, halign: "center" },
      didDrawPage: () => {
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(9);
        doc.setTextColor(150);
        doc.text(
          `Page ${pageCount}`,
          doc.internal.pageSize.width - marginLeft - 10,
          doc.internal.pageSize.height - 10
        );
      },
    });

    doc.save("SmartExpense_Report.pdf");
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-primary display-6 fw-bold">Dashboard</h2>
        <p className="text-muted">Track your expenses, manage your budget, and stay in control.</p>
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`alert alert-dismissible fade show text-center fw-medium shadow-sm ${
            message.includes("successfully") ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      {/* Total Expenses */}
      <div className="d-flex justify-content-between align-items-center alert alert-info shadow-sm px-4 py-3 rounded-3 mb-4">
        <span className="fw-semibold fs-5">Total Expenses</span>
        <span className="fs-5 fw-bold text-primary">₹{total.toFixed(2)}</span>
      </div>

      {/* Add Expense Section */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 text-primary">Add New Expense</h5>
        </div>
        <div className="card-body">
          <AddExpense onAdd={addExpense} />
        </div>
      </div>

      {/* Expense List Section */}
      <div className="mb-5">
        <h4 className="mb-3 text-dark">Your Expenses</h4>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        )}
      </div>

      {/* PDF Button */}
      <div className="text-center">
        <button
          className="btn btn-outline-primary btn-lg shadow-sm px-4 py-2"
          onClick={generatePDF}
          style={{
            borderRadius: "30px",
            transition: "all 0.3s ease",
          }}
        >
          <i className="fas fa-download me-2"></i>Download PDF Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
