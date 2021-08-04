import { CHANGE_INPUT } from 'state/action-creators';

const initialState = {
  inputValue: 'Horki',
};

const searchReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case CHANGE_INPUT:
      return { inpitValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
