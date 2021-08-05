import { SELECT_METRIC, SELECT_IMPERIAL } from 'state/action-creators';

const initialState = {
  value: 'metric',
};

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_METRIC:
      return { value: 'metric' };
    case SELECT_IMPERIAL:
      return { value: 'imperial' };
    default:
      return state;
  }
};

export default unitReducer;
