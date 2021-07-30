import { FETCH_WEATHER } from 'state/action-creators';

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.playload.data,
      };
    default:
      return state;
  }
};

export default weatherReducer;
