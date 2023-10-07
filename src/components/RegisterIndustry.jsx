import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterIndustry.css";

function RegisterIndustry({ addIndustry, industryData, parameters }) {
  const [industryFormData, setIndustryFormData] = useState({
    industryName: "",
    industryCategory: "",
    industryKey: "",
    contactPerson: "",
    mobNumber: "",
    email: "",
    waterConsumption: "",
    city: "",
    address: "",
    ...parameters.reduce((acc, param) => ({ ...acc, [param]: false }), {}), // Initialize parameters
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setIndustryFormData({
      ...industryFormData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIndustry = { ...industryFormData };
    addIndustry(newIndustry);
    setIndustryFormData({
      industryName: "",
      industryCategory: "",
      industryKey: "",
      contactPerson: "",
      mobNumber: "",
      email: "",
      waterConsumption: "",
      city: "",
      address: "",
      ...parameters.reduce((acc, param) => ({ ...acc, [param]: false }), {}), // Reset parameters
    });
    // Navigate back to the Industry page after registration
    navigate("/industry");
  };

  return (
    <div className="register-industry">
      <div className="register-industry-form">
        <h2>Register Industry</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for industry details */}
          <div className="input-field">
            <label htmlFor="industryName">Industry Name</label>
            <input
              type="text"
              id="industryName"
              name="industryName"
              value={industryFormData.industryName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="industryCategory">Industry Category</label>
            <input
              type="text"
              id="industryCategory"
              name="industryCategory"
              value={industryFormData.industryCategory}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="industryKey">Industry Key</label>
            <input
              type="text"
              id="industryKey"
              name="industryKey"
              value={industryFormData.industryKey}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="contactPerson">Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={industryFormData.contactPerson}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="mobNumber">Mobile Number</label>
            <input
              type="text"
              id="mobNumber"
              name="mobNumber"
              value={industryFormData.mobNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={industryFormData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="waterConsumption">
              Water Consumption Parameter
            </label>
            <input
              type="text"
              id="waterConsumption"
              name="waterConsumption"
              value={industryFormData.waterConsumption}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={industryFormData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={industryFormData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Checkboxes for parameters */}
          <div className="parameter-checkboxes">
            {parameters.map((param) => (
              <label key={param}>
                <input
                  type="checkbox"
                  name={param}
                  checked={industryFormData[param]}
                  onChange={handleInputChange}
                />
                {param}
              </label>
            ))}
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
        <Link to="/industry" className="link-to-industry">
          Back to Industry
        </Link>
      </div>
    </div>
  );
}

export default RegisterIndustry;
