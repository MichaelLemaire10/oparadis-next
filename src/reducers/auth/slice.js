import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCredentials: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken,
      state.refreshToken = refreshToken
    },

    setVerifyMail: (state, action) => {
      const { token } = action.payload;
      state.verifyMail = token
    },

    logOut: (state) => {
      state.accessToken = null,
      state.refreshToken = null
    },

  },
});

export const { 
  setCredentials,
  setVerifyMail,
  logOut
} = authSlice.actions;

export default authSlice.reducer;
