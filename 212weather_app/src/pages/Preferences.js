import React, { useState, useEffect } from "react";

const Preferences = () => {
  const [city, setCity] = useState(localStorage.getItem("preferredCity") || "");
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "metric");
  const [isSaved, setIsSaved] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
  };

  const savePreferences = () => {
    localStorage.setItem("preferredCity", city);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  useEffect(() => {
    setCity(localStorage.getItem("preferredCity") || "");
  }, []);

  return (
    <div className="preferences-page">
      <h2>Preferences</h2>

      <div>
        <label>Preferred City:</label>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
      </div>

      <div>
        <label>Preferred Temperature Unit:</label>
        <div className="unit-buttons">
          <button
            onClick={() => handleUnitChange("metric")}
            className={unit === "metric" ? "active" : ""}
          >
            °C
          </button>
          <button
            onClick={() => handleUnitChange("imperial")}
            className={unit === "imperial" ? "active" : ""}
          >
            °F
          </button>
        </div>
      </div>

      <button onClick={savePreferences}>Save Preferences</button>

      {isSaved && <div className="success-message">Preferences saved!</div>}
    </div>
  );
};

export default Preferences;
