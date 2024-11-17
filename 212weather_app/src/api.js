import axios from "axios";

export const fetchWeather = async (city, units = "metric") => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export const fetchClothingData = async (unit = "metric") => {
  try {
    const response = await axios.get("http://localhost:5000/api/clothing");
    const clothing = response.data;

    if (unit === "imperial") {
      return clothing.map((item) => ({
        ...item,
        minTemp: (item.minTemp * 9) / 5 + 32,
        maxTemp: (item.maxTemp * 9) / 5 + 32,
      }));
    }

    return clothing;
  } catch (error) {
    console.error("Error fetching clothing data", error);
    return [];
  }
};
