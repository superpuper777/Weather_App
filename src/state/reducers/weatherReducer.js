const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'fetch_weather':
      return {
        ...state,
        weather: action.playload.data,
      };
    default:
      return state;
  }
};

export default weatherReducer;
