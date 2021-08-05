export const CHANGE_INPUT = 'CHANGE_INPUT';

export const CLEAR_INPUT = 'CLEAR_INPUT';

export const changeInputAction = (text) => {
  return {
    type: CHANGE_INPUT,
    payload: text,
  };
};

export const clearInputAction = (text) => {
  return {
    type: CLEAR_INPUT,
    payload: text,
  };
};
