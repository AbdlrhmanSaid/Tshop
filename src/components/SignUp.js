import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faGlobe,
  faCity,
  faBirthdayCake,
  faPhone,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const SignUp = () => {
  // اريد استخدام هذه البيانات المحفوظه هنا
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityOptions, setSelectedCityOptions] = useState([]);
  const [selectedCityOption, setSelectedCityOption] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const cityOptions = {
    cairo: [
      "Nasr City",
      "Maadi",
      "Heliopolis",
      "Dokki",
      "Zamalek",
      "Mohandessin",
      "Giza",
      "Shubra",
      "October City",
    ],
    alexandria: [
      "Gleem",
      "Montaza",
      "Sidi Gaber",
      "Bolkly",
      "Miami",
      "San Stefano",
      "Kafr Abdo",
      "Al-Ibrahimiyya",
      "Al-Muntazah",
      "Schutz",
    ],
  };

  // Handle city change
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedCityOptions(cityOptions[city] || []);
    setSelectedCityOption(""); // Reset the "City Option" value when changing the city
  };

  // Render city options dropdown
  const renderCityOptions = () => (
    <div className="form-group">
      <label htmlFor="cityOption">
        <FontAwesomeIcon icon={faCity} className="me-2" />
        City Option
      </label>
      <select
        className="form-control"
        id="cityOption"
        value={selectedCityOption}
        onChange={(e) => setSelectedCityOption(e.target.value)}
      >
        <option value="">Select City Option</option>
        {selectedCityOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  // Handle save button click
  const handleSave = () => {
    console.log("Save button clicked");
    console.log(
      name,
      address,
      selectedCity,
      selectedCityOption,
      age,
      phoneNumber
    );
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Settings</h5>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="city">
              <FontAwesomeIcon icon={faGlobe} className="me-2" />
              City
            </label>
            <select
              className="form-control"
              id="city"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="cairo">Cairo</option>
              <option value="alexandria">Alexandria</option>
            </select>
            {!selectedCity && (
              <small className="text-danger">Please select a city.</small>
            )}
          </div>

          {/* City Options */}
          {selectedCity && renderCityOptions()}

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label htmlFor="age">
              <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
              Age
            </label>
            <input
              type="Number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Save Button */}
          <Button
            className="btn my-2 w-25 m-auto"
            onClick={handleSave}
            disabled={
              !name || !selectedCity || !address || !age || !phoneNumber
            }
          >
            <FontAwesomeIcon icon={faSave} className="me-2" />
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
