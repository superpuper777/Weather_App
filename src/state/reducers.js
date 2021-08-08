import { combineReducers } from 'redux';

import forecastReducer from './forecast/reducer';
// import searchReducer from './search/reducer';
import searchReducer from './search/reducer';
import unitReducer from './unit/reducer';
import weatherReducer from './weather/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
  unit: unitReducer,
});

export default rootReducer;
