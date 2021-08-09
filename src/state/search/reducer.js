import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: 'Horki',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.inputValue = action.payload;
    },
    clearInput: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { changeInput, clearInput } = searchSlice.actions;
