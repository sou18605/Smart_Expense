import React, { useState } from "react";

const AddExpense = ({ onAdd }) => {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <div className="card shadow-lg border-0 p-4 mb-4 bg-light">
      <h4 className="mb-3 text-primary font-weight-bold">
        ➕ Add New Expense
      </h4>

      <form onSubmit={handleSubmit}>
        <div className="form-row align-items-end">
          <div className="form-group col-md-4">
            <label className="font-weight-semibold">📝 Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Grocery Shopping"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group col-md-3">
            <label className="font-weight-semibold">💰 Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 150"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              required
            />
          </div>

          <div className="form-group col-md-3">
            <label className="font-weight-semibold">📂 Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Food, Rent"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            />
          </div>
           <br></br>
          <div className="form-group col-md-2 text-right">
            <button
              type="submit"
              className="btn btn-primary btn-block font-weight-bold"
              style={{ height: "100%" }}
            >
              ➕ Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
