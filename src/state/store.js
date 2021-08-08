import { configureStore } from '@reduxjs/toolkit';

// import forecastReducer from './forecast/reducer';
import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer,
});

// reducer: {
//   forecast: forecastReducer,
// },
