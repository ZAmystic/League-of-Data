import React from 'react';
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>Overview</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main className="main-content">
          <h2>Welcome</h2>
          <p>This is the main content area.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;