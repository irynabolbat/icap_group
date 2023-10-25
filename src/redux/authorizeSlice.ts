import { createSlice } from '@reduxjs/toolkit';

const authorizeSlice= createSlice({
  name: 'authorized',
  initialState: {
    authorized: false
  },
  reducers: {
    login: (state) => {
      state.authorized = true;
    },
    logout: (state) => {
      state.authorized = false;
    },
  }
});

export const { login, logout } = authorizeSlice.actions;

export default authorizeSlice.reducer;
