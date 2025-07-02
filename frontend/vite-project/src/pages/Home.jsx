import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Home = () => (
  <div>
    {/* Hero Section */}
    <div className="jumbotron jumbotron-fluid bg-info text-white mb-5 animate__animated animate__fadeIn">
      <div className="container text-center py-5">
        <h1 className="display-4 font-weight-bold animate__animated animate__zoomInDown">
          Welcome to <span style={{  textShadow: '2px 2px #000' }}>SmartExpense</span>
        </h1>
        <p className="lead my-4 animate__animated animate__fadeInUp">
          Your ultimate platform for expense tracking, analysis, and smarter money management.
        </p>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          Get insights, set financial goals, and visualize spending patterns in just a few clicks.
        </p>
        <div className="mt-4 animate__animated animate__fadeInUp animate__delay-2s">
          <Link to="/dashboard" className="btn btn-light btn-lg mx-2 shadow">
            <i className="fas fa-chart-line mr-2"></i> Dashboard
          </Link>
          <Link to="/addexpense" className="btn btn-outline-light btn-lg mx-2 shadow">
            <i className="fas fa-plus-circle mr-2"></i> Add Expense
          </Link>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="container mb-5">
      <h2 className="text-center mb-4 text-primary animate__animated animate__fadeInDown">🔍 Why Choose SmartExpense?</h2>
      <p className="text-center text-muted mb-5 animate__animated animate__fadeIn">
        Experience seamless budgeting, real-time tracking, and financial empowerment all in one place.
      </p>

      <div className="row text-center">
        {/* Add Expense */}
        <div className="col-md-4 mb-4 animate__animated animate__fadeInLeft">
          <div className="card h-100 shadow border-0 hover-shadow transition">
            <img
              src={img1}
              alt="Add Expense"
              className="card-img-top p-4"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title text-info">📝 Easy Logging</h5>
              <p className="card-text">
                Log your expenses quickly with category selection, tags, and optional notes.
              </p>
              <p><strong>💡 Tip:</strong> Use voice input on mobile to log faster!</p>
            </div>
          </div>
        </div>

        {/* View Reports */}
        <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
          <div className="card h-100 shadow border-0 hover-shadow transition">
            <img
              src={img3}
              alt="Reports"
              className="card-img-top p-4"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title text-success">📊 Smart Reports</h5>
              <p className="card-text">
                Instantly view monthly breakdowns, graphs, and charts to understand your habits.
              </p>
              <p><strong>📁 Export:</strong> Download your reports as PDF anytime!</p>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="col-md-4 mb-4 animate__animated animate__fadeInRight">
          <div className="card h-100 shadow border-0 hover-shadow transition">
            <img
              src={img2}
              alt="Insights"
              className="card-img-top p-4"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title text-warning">📈 Smart Insights</h5>
              <p className="card-text">
                Get personalized recommendations and trend forecasts based on your past data.
              </p>
              <p><strong>🔔 Alerts:</strong> Set up monthly budget notifications!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call To Action Section */}
    <div className="bg-light py-5 mt-5 animate__animated animate__fadeInUp">
      <div className="container text-center">
        <h2 className="mb-3">Ready to take control of your finances?</h2>
        <p className="mb-4 text-muted">
          Sign up now and start your journey to smarter spending. It's quick and free!
        </p>
        <Link to="/register" className="btn btn-primary btn-lg px-4 shadow">
          Register Now
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
