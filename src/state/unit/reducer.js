// import { createSlice } from '@reduxjs/toolkit';
import { SELECT_METRIC, SELECT_IMPERIAL } from './action-creators';

const initialState = {
  value: 'metric',
};

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_METRIC:
      return { value: 'metric' };
    case SELECT_IMPERIAL:
      return { value: 'imperial' };
    default:
      return state;
  }
};

export default unitReducer;

// const unitSlice = createSlice({
//   name: 'unit',
//   initialState,
//   reducers: {
//     selectMetric() {
//       return { value: 'metric' };
//     },
//     selectImperial() {
//       return { value: 'imperial' };
//     },
//   },
// });

// export default unitSlice.reducer;

// export const { selectMetric, selectImperial } = unitSlice.actions;
