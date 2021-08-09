import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: null,
  isLoading: false,
  isError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherRequest: (state) => {
      state.weather = null;
      state.isLoading = true;
      state.isError = false;
    },
    fetchWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchWeatherError: (state) => {
      state.weather = null;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default weatherSlice.reducer;

export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherError } = weatherSlice.actions;
