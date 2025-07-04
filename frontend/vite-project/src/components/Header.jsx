import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-coins fa-lg mr-2"></i>
          <span style={{ fontWeight: "600", fontSize: "1.3rem", letterSpacing: "0.5px" }}>
            SmartExpense
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mr-auto ml-3">
            <li className="nav-item">
              <NavLink to="/home" className={({ isActive }) => `nav-link ${isActive ? "active font-weight-bold" : ""}`}>
                <i className="fas fa-home mr-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? "active font-weight-bold" : ""}`}>
                <i className="fas fa-chart-line mr-1"></i> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addexpense" className={({ isActive }) => `nav-link ${isActive ? "active font-weight-bold" : ""}`}>
                <i className="fas fa-plus-circle mr-1"></i> Add Expense
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? "active font-weight-bold" : ""}`}>
                <i className="fas fa-sign-in-alt mr-1"></i> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? "active font-weight-bold" : ""}`}>
                <i className="fas fa-user-plus mr-1"></i> Register
              </NavLink>
            </li>
          </ul>

          {/* 🔍 Search Bar */}
          <form className="form-inline d-flex align-items-center my-2 my-lg-0">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Search expenses..."
              aria-label="Search"
              style={{ width: "200px", borderRadius: "20px" }}
              onChange={handleSearch}
            />
            <button className="btn btn-light btn-sm" type="button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
