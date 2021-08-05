import { fetchForecast, groupByDay } from 'services/weather';

export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';

export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';

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
