import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Parameters.css"; // Import the CSS file for Parameters

function Parameters({ onAddParameter, parameters }) {
  const [newParameter, setNewParameter] = useState("");

  const handleInputChange = (e) => {
    setNewParameter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddParameter(newParameter); // Call the onAddParameter function with the new parameter
    setNewParameter(""); // Clear the input field
  };

  return (
    <div className="parameters">
      <h2>Parameters Page</h2>
      <Link to="/industry">Back to Industry</Link>
      <form onSubmit={handleSubmit}>
        <label>
          New Parameter:
          <input
            type="text"
            value={newParameter}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Parameter</button>
      </form>
      <ul>
        {parameters.map((param, index) => (
          <li key={index}>{param}</li>
        ))}
      </ul>
    </div>
  );
}

export default Parameters;
