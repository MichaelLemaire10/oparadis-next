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
    setOpenModalSignup(state, action) {
      state.modalSignup = action.payload;
    },
    setOpenFormPhoto(state, action) {
      state.formPhoto = action.payload;
    },
    setOpenFormText(state, action) {
      state.formText = action.payload;
    },
    setOpenFormBool(state, action) {
      state.formBool = action.payload;
    },
  },
});

export const { 
  setOpenMenu,
  setOpenModalSignin,
  setOpenModalSignup,
  setOpenFormPhoto,
  setOpenFormText,
  setOpenFormBool,
} = booleanSlice.actions;
export default booleanSlice.reducer;
