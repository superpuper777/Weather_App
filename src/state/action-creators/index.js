import { fetchWeather } from 'services/weather';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';

export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const FETCH_FORECAST = 'FETCH_FORECAST';

export const fetchWeatherAction = (query, unit) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WEATHER_REQUEST });
    try {
      const weather = await fetchWeather(query, unit);

      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: weather.data });
    } catch (error) {
      dispatch({ type: FETCH_WEATHER_ERROR, payload: error });
    }
  };
};

export const forecastAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_FORECAST,
      payload: data,
    });
  };
};
