import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },

    setErrorsUser: (state, action) => {
      state.errorsUser = action.payload;
    },

    setSignup(state, action) {
      state.signup = action.payload;
    },

    setSignin: (state, action) => {
      state.signin = action.payload;
    },

    setProfilDesc: (state, action) =>{
      state.userFormDesc = action.payload;
    },

    setProfilPwd: (state, action) => {
      state.userFormPwd = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
      state.userFormDesc = initialState.userFormDesc;
    },
    resetPwd: (state) => {
      state.userFormPwd = initialState.userFormPwd;
    }
  },
});

export const { 
  getUser, 
  setErrorsUser, 
  setSignin, 
  setSignup,
  setProfilDesc,
  setProfilPwd,
  resetUser,
  resetPwd
} = userSlice.actions;
export default userSlice.reducer;
