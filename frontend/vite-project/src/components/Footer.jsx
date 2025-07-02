import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row">

        {/* About Section */}
        <div className="col-md-4 mb-4">
          <h5 className="text-info">About SmartExpense</h5>
          <p className="small">
            SmartExpense is your all-in-one solution to manage, track, and analyze expenses. 
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4">
          <h5 className="text-info">Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link className="text-white text-decoration-none" to="/home">Home</Link></li>
            <li><Link className="text-white text-decoration-none" to="/dashboard"> Dashboard</Link></li>
            <li><Link className="text-white text-decoration-none" to="/addexpense"> Add Expense</Link></li>
            <li><Link className="text-white text-decoration-none" to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="col-md-4 mb-4">
          <h5 className="text-info">Connect With Us</h5>
          <p className="small mb-2">📧 contact@smartexpense.com</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-50 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white-50 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white-50 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white-50 mx-2">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-secondary" />

      <div className="text-center small text-muted">
        © {new Date().getFullYear()} <strong>SmartExpense</strong>. All rights reserved.<br />
        Designed & Developed by <strong>Soumya Ghosh</strong>
      </div>
    </div>
  </footer>
);

export default Footer;
