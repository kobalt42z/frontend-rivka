import { configureStore, createSlice ,PayloadAction} from '@reduxjs/toolkit'


interface authState {
  token: string | null;
  user: string | null;
  error: string | null;
  isLoading: boolean;
}
const initialState: authState = {
  token: null,
  user: null,
  error: null,
  isLoading: false
};

const authState = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    }
    ,
    loginSuccess: (state, action:PayloadAction<authState>) => {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      return { ...initialState }
    },
  }
});
export const { loginStart, loginSuccess, loginFailure, logout } = authState.actions;
export default authState.reducer;
