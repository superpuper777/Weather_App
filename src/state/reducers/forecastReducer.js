import { FETCH_FORECAST } from 'state/action-creators';

const forecastReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        ...state,
        forecast: action.playload.data, // action.playload?
      };
    default:
      return state;
  }
};

export default forecastReducer;
