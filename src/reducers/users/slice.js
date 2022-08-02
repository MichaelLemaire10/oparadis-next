import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },

    setErrorsUser(state, action) {
      state.errorsUser = action.payload;
    },

    setSignup(state, action) {
      state.signup = action.payload;
    },

    setSignin(state, action) {
      state.signin = action.payload;
    },
  },
});

export const { 
  getUser, 
  setErrorsUser, 
  setSignin, 
  setSignup 
} = userSlice.actions;
export default userSlice.reducer;
