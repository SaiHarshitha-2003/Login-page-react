import React from "react";
import "./Dashboard.css"; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <div className="logo">Logo</div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/employee-list">Employee List</a>
          <span className="user-info">Harshi -</span>
          <a href="/logout">Logout</a>
        </nav>
      </div>

      {/* Sidebar and Main Content */}
      <div className="content-wrapper">
        <div className="sidebar">
          <a href="/dashboard" className="active">Dashboard</a>
        </div>
        <div className="main-content">
          <h1>Welcome Admin Panel</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
