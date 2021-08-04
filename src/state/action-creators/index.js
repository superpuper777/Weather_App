import { fetchForecast, fetchWeather, groupByDay } from 'services/weather';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';

export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';

export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const CLEAR_INPUT = 'CLEAR_INPUT';

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

export const fetchForecastAction = (query, unit) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FORECAST_REQUEST });
    try {
      const forecast = await fetchForecast(query, unit);

      dispatch({ type: FETCH_FORECAST_SUCCESS, payload: groupByDay(forecast.data.list) });
    } catch (error) {
      dispatch({ type: FETCH_FORECAST_ERROR, payload: error });
    }
  };
};

export const changeInputAction = (text) => {
  return {
    type: CHANGE_INPUT,
    payload: text,
  };
};

export const clearInputAction = (text) => {
  return {
    type: CLEAR_INPUT,
    payload: text,
  };
};
