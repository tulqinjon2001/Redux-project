import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    loginUserStart: state => {
      state.isLoading = true;
    },
    loginUserSucces: state => {},
    loginUserFailure: state => {}
  }
})

export const {loginUserStart} = authSlice.actions;
export default authSlice.reducer;