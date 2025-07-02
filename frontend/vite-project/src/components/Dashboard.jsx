import React, { useState, useEffect } from "react";
import axios from "axios";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error("❌ Fetch error:", err.message);
    }
  };

  const addExpense = async (form) => {
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", {
        ...form,
        amount: parseFloat(form.amount),
      });
      setExpenses([res.data, ...expenses]);
    } catch (err) {
      console.error("❌ Add error:", err.message);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter((e) => e._id !== id));
    } catch (err) {
      console.error("❌ Delete error:", err.message);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const marginLeft = 15;
    const marginTop = 20;

    const companyName = "SmartExpense Inc.";
    const reportDate = new Date().toLocaleDateString();
    const contactInfo = "Contact: support@smartexpense.com | +91-8967867874";

    // Header background
    doc.setFillColor(33, 150, 243); // blue
    doc.rect(marginLeft, marginTop, 180, 30, "F");

    // Header text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text(companyName, marginLeft + 5, marginTop + 10);

    doc.setFontSize(11);
    doc.text(`Date: ${reportDate}`, marginLeft + 5, marginTop + 17);
    doc.text(contactInfo, marginLeft + 5, marginTop + 24);

    // Section Title
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(14);
    doc.text("Expense Report", marginLeft, marginTop + 40);

    // Table
    autoTable(doc, {
      startY: marginTop + 45,
      margin: { left: marginLeft, right: marginLeft },
      head: [["Title", "Amount", "Category", "Date"]],
      body: expenses.map((exp) => [
        exp.title,
        `₹${exp.amount}`,
        exp.category,
        new Date(exp.date).toLocaleDateString(),
      ]),
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [63, 81, 181],
        textColor: 255,
        halign: "center",
      },
      didDrawPage: (data) => {
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(9);
        doc.setTextColor(150);
        doc.text(`Page ${pageCount}`, doc.internal.pageSize.width - marginLeft - 10, doc.internal.pageSize.height - 10);
      },
    });

    doc.save("SmartExpense_Report.pdf");
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="container py-4 animate__animated animate__fadeIn">
      <h2 className="text-center mb-4 text-primary animate__animated animate__zoomIn">
        Dashboard
      </h2>

      <div
        className="alert alert-info text-center font-weight-bold shadow-sm"
        style={{ fontSize: "1.1rem" }}
      >
        Total Expenses: ₹{total.toFixed(2)}
      </div>

      {/* Add Expense Form */}
      <div className="mb-4 p-3 bg-light rounded shadow-sm animate__animated animate__fadeInUp">
        <AddExpense onAdd={addExpense} />
      </div>

      {/* Expense List */}
      <div className="mb-4 animate__animated animate__fadeInUp">
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>

      {/* PDF Button */}
      <div className="text-center">
        <button
          className="btn btn-primary btn-lg shadow-sm px-4 py-2"
          onClick={generatePDF}
          style={{
            transition: "all 0.3s ease",
            borderRadius: "25px",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#007bff")
          }
        >
          <i className="fas fa-download mr-2"></i>Download PDF Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
