import React from 'react';

function ForecastToggle({ duration, setDuration }) {
  return (
    <div>
      <h3>Forecast Duration</h3>
      <button onClick={() => setDuration(1)} className={duration === 1 ? 'active' : ''}>Current</button>
      <button onClick={() => setDuration(7)} className={duration === 7 ? 'active' : ''}>7 Days</button>
      <button onClick={() => setDuration(14)} className={duration === 14 ? 'active' : ''}>14 Days</button>
    </div>
  );
}

export default ForecastToggle;
