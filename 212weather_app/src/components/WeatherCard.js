import React from "react";

const WeatherCard = ({ weatherData, unit }) => {
  if (!weatherData) {
    return null;
  }

  const formatTime = (timestamp, timezone) => {
    const utc_seconds = parseInt(timestamp, 10) + parseInt(timezone, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const local_date = new Date(utc_milliseconds).toUTCString();
    return local_date;
  };

  const getUnitSymbol = () => (unit === "metric" ? "°C" : "°F");

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <div className="weather-details">
        <div className="weather-time">
          <p><strong>Date & Time:</strong> {formatTime(weatherData.dt, weatherData.timezone)}</p>
        </div>
        <div className="weather-icon">
          <img src={weatherIconUrl} alt={weatherData.weather[0].description} />
        </div>
      </div>
      <p><strong>Temperature:</strong> {weatherData.main.temp}{getUnitSymbol()}</p>
      <p><strong>Feels Like:</strong> {weatherData.main.feels_like}{getUnitSymbol()}</p>
      <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
      <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>
      <p><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherCard;
