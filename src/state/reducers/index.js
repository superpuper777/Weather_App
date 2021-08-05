import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';
import searchReducer from './searchReducer';
import unitReducer from './unitReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
  unit: unitReducer,
});

export default rootReducer;
