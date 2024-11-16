import React, { useState, useEffect } from 'react';

function Settings() {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings'));
    if (savedSettings) {
      setCity(savedSettings.city);
      setUnit(savedSettings.unit);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('settings', JSON.stringify({ city, unit }));
    alert('Settings saved!');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <input
        type="text"
        placeholder="Preferred city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label>Preferred Temperature Unit:</label>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default Settings;
