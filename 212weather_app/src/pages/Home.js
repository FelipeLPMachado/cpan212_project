import React, { useState, useEffect } from "react";
import { fetchWeather, fetchClothingData } from "../api";
import ClothingCard from "../components/ClothingCard";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState(localStorage.getItem("preferredCity") || "");
  const [weatherData, setWeatherData] = useState(null);
  const [clothingData, setClothingData] = useState([]);
  const unit = localStorage.getItem("unit") || "metric";

  const handleSearch = () => {
    if (city) {
      fetchWeather(city, unit).then(setWeatherData);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (weatherData) {
      fetchClothingData(unit)
        .then((clothing) => {
          setClothingData(clothing);
        })
        .catch((error) => {
          console.error("Error fetching clothing data:", error);
        });
    }
  }, [weatherData, unit]);

  return (
    <div className="home-page">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <>
          <WeatherCard weatherData={weatherData} unit={unit} />
          <div className="clothing-container">
            <h3>Clothing Suggestions</h3>
            {clothingData
              .filter(
                (item) =>
                  weatherData.main.temp >= item.minTemp &&
                  weatherData.main.temp <= item.maxTemp
              )
              .map((clothing) => (
                <ClothingCard key={clothing._id} clothing={clothing} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
