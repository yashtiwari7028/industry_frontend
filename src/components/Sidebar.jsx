// Sidebar.js

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ onLogout }) {
  // Step 2: Create a state variable to track sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Step 5: Event handler to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleLogoutAndReload = () => {
    onLogout();
    window.location.reload();
    Navigate("/");
  };

  return (
    <div>
      {/* Step 3: Place the toggle button outside the sidebar */}
      <button className="toggle-button" onClick={toggleSidebar}>
        TS
      </button>
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/comparisons">Comparisons</Link>
          </li>
          <li>
            <Link to="/production">Production</Link>
          </li>
          <li>
            <Link to="/industry">Industry</Link>
          </li>
          <li>
            <Link to="/parameters">Parameter</Link>
          </li>
          <li>
            <Link to="/industry-device">Industry Device</Link>
          </li>
          <li>
            <Link to="/remarks">Remarks</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogoutAndReload}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
