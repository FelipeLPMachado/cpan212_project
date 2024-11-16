import React from 'react';

function UnitSelector({ unit, setUnit }) {
  return (
    <div className="unit-selector">
      <label>Temperature Unit:</label>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
  );
}

export default UnitSelector;
