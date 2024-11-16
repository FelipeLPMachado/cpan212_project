import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div>
      <h2>Current Weather</h2>
      <div>
        <p>{data.current.condition}</p>
        <p>Temperature: {data.current.temperature}°C</p>
      </div>
      <h2>Forecast</h2>
      {data.forecast.map((day, index) => (
        <div key={index}>
          <p>Date: {day.date}</p>
          <p>{day.condition}</p>
          <p>Temperature: {day.temperature}°C</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherDisplay;
