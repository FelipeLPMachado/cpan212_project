import { useState, useEffect } from 'react';

const apiKey = '2ff4edc138msh0c6076cee7b1d3fp11956fjsn7d8a90489856';

function useWeatherAPI(location, unit, duration) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeURIComponent(location)}&days=${duration}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    setLoading(true);
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        setData({
          current: {
            condition: data.current.condition.text,
            temperature: unit === 'C' ? data.current.temp_c : data.current.temp_f,
            description: data.current.condition.text,
          },
          forecast: data.forecast.forecastday.map(day => ({
            date: day.date,
            condition: day.day.condition.text,
            temperature: {
              min: unit === 'C' ? day.day.mintemp_c : day.day.mintemp_f,
              max: unit === 'C' ? day.day.maxtemp_c : day.day.maxtemp_f,
            },
          })),
        });
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [location, unit, duration]);

  return { data, loading, error };
}

export default useWeatherAPI;
