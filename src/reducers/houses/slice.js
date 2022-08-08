import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    getFourHouses: (state, action) => {
      state.fourHouses = action.payload;
    },
    getSearchHouses: (state, action) => {
      state.searchHouses = action.payload;
    },
    getHouse: (state, action) => {
      state.house = action.payload;
    },
    setErrorsHouse: (state, action) => {
      state.errorsHouse = action.payload;
    },
    setHouseFormPhoto: (state, action) => {
      state.houseFormPhoto.country = action.payload;
    },
    setHouseFormDesc: (state, action) => {
      state.houseFormDesc = action.payload;
    },
    setHouseFormDescType: (state, action) => {
      state.houseFormDesc.type = action.payload;
    },
    setHouseFormDescCountry: (state, action) => {
      state.houseFormDesc.country = action.payload;
    },
    setHouseFormBool: (state, action) => {
      state.houseFormBool = action.payload;
    },
  },
});

export const {
  getFourHouses,
  getSearchHouses,
  getHouse,
  setErrorsHouse,
  setHouseFormPhoto,
  setHouseFormDesc,
  setHouseFormDescType,
  setHouseFormDescCountry,
  setHouseFormBool
} = houseSlice.actions;

export default houseSlice.reducer;
