import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
});

export default rootReducer;
