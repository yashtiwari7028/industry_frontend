import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Industry from "./components/Industry";
import Login from "./components/Login";
import Parameters from "./components/Parameters"; // Import the Parameters component
import RegisterIndustry from "./components/RegisterIndustry";
import Sidebar from "./components/Sidebar";

function App() {
  const [industryData, setIndustryData] = useState([]);
  const [parameters, setParameters] = useState([]); // Maintain parameters in App state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Function to add an industry to the state
  const addIndustry = (newIndustry) => {
    setIndustryData([...industryData, newIndustry]);
  };

  // Function to add parameters to the shared state
  const addParameter = (newParameter) => {
    setParameters([...parameters, newParameter]);
  };

  const handleLogin = () => {
    // In a real application, you would perform authentication here
    // For example, you might call an authentication API and set the login status based on the response
    // For demonstration purposes, we'll simply set isLoggedIn to true when login is clicked
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic here
    // In a real application, you would typically clear user authentication tokens and state
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Sidebar onLogout={handleLogout} />}
        <main className="content">
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn && (
              <Route
                path="/industry"
                element={
                  <Industry
                    industryData={industryData}
                    parameters={parameters}
                  />
                }
              />
            )}
            {isLoggedIn && (
              <Route
                path="/industry/register"
                element={
                  <RegisterIndustry
                    addIndustry={addIndustry}
                    industryData={industryData}
                    parameters={parameters} // Pass the parameters prop here
                  />
                }
              />
            )}
            {isLoggedIn && (
              <Route
                path="/parameters"
                element={
                  <Parameters
                    onAddParameter={addParameter}
                    parameters={parameters}
                  />
                }
              />
            )}
            {/* Add other routes for dashboard, comparisons, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
