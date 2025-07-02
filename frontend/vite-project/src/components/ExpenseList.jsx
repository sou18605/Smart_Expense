import React from "react";

const ExpenseList = ({ expenses, onDelete }) => (
  <div className="table-responsive">
    <table className="table table-striped table-bordered shadow-sm">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Amount (₹)</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>₹{item.amount}</td>
              <td>{item.category}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center text-muted">No expenses recorded.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default ExpenseList;