const forecastReducer = (state = [], action) => {
  switch (action.type) {
    case 'fetch_forecast':
      return {
        ...state,
        forecast: action.playload.data,
      };
    default:
      return state;
  }
};

export default forecastReducer;
