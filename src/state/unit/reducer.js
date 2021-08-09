import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'metric',
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    selectMetric: (state) => {
      state.value = 'metric';
    },
    selectImperial: (state) => {
      state.value = 'imperial';
    },
  },
});

export default unitSlice.reducer;

export const { selectMetric, selectImperial } = unitSlice.actions;
