import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from './action-creators';

const initialState = {
  weather: null,
  isLoading: false,
  isError: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        weather: null,
        isLoading: true,
        isError: false,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        weather: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_WEATHER_ERROR:
      return {
        weather: null,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default weatherReducer;
