import { fetchForecast, groupByDay } from 'services/weather';
import { fetchForecastRequest, fetchForecastSuccess, fetchForecastError } from './reducer';

// export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';

// export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';

// export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';

export const fetchForecastAction = (query, unit) => {
  return async (dispatch) => {
    dispatch(fetchForecastRequest());
    try {
      const forecast = await fetchForecast(query, unit);

      const groupedForecast = groupByDay(forecast.data.list);

      console.log(groupedForecast);
      dispatch(fetchForecastSuccess(groupedForecast));
      console.log(fetchForecastSuccess(groupedForecast));
    } catch (error) {
      dispatch(fetchForecastError());
    }
  };
};
