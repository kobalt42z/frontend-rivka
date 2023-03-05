import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
  error: null,
  isLoading: false
};
const authState = createSlice({
  name: "login",
  initialState: initialState,
  reducer: {
    loginStart: (state) => {
      state.isLoading = true;
    }
  },
  loginSuccess: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.token = action.token;
    state.user = action.user;
  },
  loginFailure: (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  },
  logout: (state) => {
    return { ...initialState }
  },
});
export const { loginStart, loginSuccess, loginFailure, logout } = authState.actions;
export default authState.reducer ;
