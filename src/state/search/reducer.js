import { CHANGE_INPUT, CLEAR_INPUT } from './action-creators';

const initialState = {
  inputValue: 'Horki',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { inputValue: action.payload };
    case CLEAR_INPUT:
      return { inputValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
