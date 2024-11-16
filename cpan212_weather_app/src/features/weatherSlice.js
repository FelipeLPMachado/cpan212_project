import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '2ff4edc138msh0c6076cee7b1d3fp11956fjsn7d8a90489856';
const apiHost = 'weatherapi-com.p.rapidapi.com';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ location, duration }) => {
    const url = `https://${apiHost}/forecast.json?q=${location}&days=${duration}`;
    
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return {
      current: {
        condition: data.current.condition.text,
        temperature: data.current.temp_c,
        description: data.current.condition.text
      },
      forecast: data.forecast.forecastday.map(day => ({
        date: day.date,
        condition: day.day.condition.text,
        temperature: day.day.avgtemp_c,
        description: day.day.condition.text
      }))
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    location: '',
    duration: 7,
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setLocation, setDuration } = weatherSlice.actions;
export default weatherSlice.reducer;
