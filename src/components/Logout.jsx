import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, e.g., clear user session or token
    // Call the onLogout function to set isLoggedIn to false
    onLogout();
    // Navigate to the login page
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
