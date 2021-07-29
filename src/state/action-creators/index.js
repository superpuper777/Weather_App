export const fetchWeather = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'weather',
      payload: data,
    });
  };
};

export const fetchForecast = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'forecast',
      payload: data,
    });
  };
};
