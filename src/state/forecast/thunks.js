import { fetchForecast, groupByDay } from 'services/weather';
import { fetchForecastRequest, fetchForecastSuccess, fetchForecastError } from './reducer';

export const fetchForecastAction = (query, unit) => {
  return async (dispatch) => {
    dispatch(fetchForecastRequest());
    try {
      const forecast = await fetchForecast(query, unit);

      const groupedForecast = groupByDay(forecast.data.list);

      dispatch(fetchForecastSuccess(groupedForecast));
    } catch (error) {
      dispatch(fetchForecastError());
    }
  };
};
