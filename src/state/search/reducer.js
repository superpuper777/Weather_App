import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: 'Horki',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInputAction(state, action) {
      state.inputValue = action.payload;
    },
    clearInputAction(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { changeInputAction, clearInputAction } = searchSlice.actions;
