import { fetchWeather } from 'services/weather';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherError } from './reducer';

export const fetchWeatherAction = (query, unit) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const weather = await fetchWeather(query, unit);

      dispatch(fetchWeatherSuccess(weather.data));
    } catch (error) {
      dispatch(fetchWeatherError());
    }
  };
};
