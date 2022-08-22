import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const booleanSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.menu = action.payload;
    },
    setOpenModalSignin: (state, action) => {
      state.modalSignin = action.payload;
    },
    setOpenModalSignup: (state, action) => {
      state.modalSignup = action.payload;
    },
    setShowFormPhoto: (state, action) => {
      state.formPhoto = action.payload;
    },
    setShowFormText: (state, action) => {
      state.formText = action.payload;
    },
    setShowFormBool: (state, action) => {
      state.formBool = action.payload;
    },
  },
});

export const { 
  setOpenMenu,
  setOpenModalSignin,
  setOpenModalSignup,
  setShowFormPhoto,
  setShowFormText,
  setShowFormBool,
} = booleanSlice.actions;

export default booleanSlice.reducer;
