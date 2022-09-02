import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setLogged: (state, action) => {
      state.logged = action.payload;
    },

    setVerifyMail: (state, action) => {
      const { token } = action.payload;
      state.verifyMail = token
    },

  },
});

export const { 
  setLogged,
  setVerifyMail
} = authSlice.actions;

export default authSlice.reducer;
