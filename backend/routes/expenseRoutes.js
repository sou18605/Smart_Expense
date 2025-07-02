// routes/expenseRoutes.js
const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense,
} = require("../controllers/expenseController");

// GET all expenses
router.get("/", getExpenses);

// POST new expense
router.post("/", addExpense);

// DELETE an expense
router.delete("/:id", deleteExpense);

module.exports = router;
