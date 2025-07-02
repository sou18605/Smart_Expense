import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddExpense from "./components/AddExpense";

function App() {
  const [searchterm, setSearchterm] = useState('');

  return (
    <Router>
      <Header onSearch={setSearchterm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchterm} />} />
        <Route path="/home" element={<Home searchTerm={searchterm} />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
