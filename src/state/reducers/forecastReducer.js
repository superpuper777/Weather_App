import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
} from 'state/action-creators';

const initialState = {
  forecast: null,
  isLoading: false,
  isError: false,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        forecast: null,
        isLoading: true,
        isError: false,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        forecast: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_FORECAST_ERROR:
      return {
        forecast: null,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default forecastReducer;
