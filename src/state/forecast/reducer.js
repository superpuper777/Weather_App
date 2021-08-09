import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecast: [],
  isLoading: false,
  isError: false,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    fetchForecastRequest: (state) => {
      state.forecast = null;
      state.isLoading = true;
      state.isError = false;
    },
    fetchForecastSuccess: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchForecastError(state) {
      state.forecast = null;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default forecastSlice.reducer;

export const { fetchForecastRequest, fetchForecastSuccess, fetchForecastError } =
  forecastSlice.actions;
