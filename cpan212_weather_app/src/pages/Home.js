import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setLocation, setDuration } from '../features/weatherSlice';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import ForecastToggle from '../components/ForecastToggle';

function Home() {
  const dispatch = useDispatch();
  const { location, duration, data, loading, error } = useSelector((state) => state.weather);

  const handleSearch = (searchLocation) => {
    dispatch(setLocation(searchLocation));
    dispatch(fetchWeather({ location: searchLocation, duration }));
  };

  const handleDurationChange = (newDuration) => {
    dispatch(setDuration(newDuration));
    if (location) {
      dispatch(fetchWeather({ location, duration: newDuration }));
    }
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <ForecastToggle duration={duration} setDuration={handleDurationChange} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <WeatherDisplay data={data} />}
      {!loading && !error && !data && <div>No data available.</div>}
    </div>
  );
}

export default Home;
