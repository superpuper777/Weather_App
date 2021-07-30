export const FETCH_WEATHER = 'FETCH_WEATHER';

export const FETCH_FORECAST = 'FETCH_FORECAST';

export const weatherAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WEATHER,
      payload: data,
    });
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
