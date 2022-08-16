import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    // GET //
    getFourHouses: (state, action) => {
      state.fourHouses = action.payload;
    },
    getSearchHouses: (state, action) => {
      state.searchHouses = action.payload;
    },
    getHouseDesc: (state, action) => {
      state.houseDesc = action.payload;
    },
    getHouseBool: (state, action) => {
      state.houseBool = action.payload;
    },
    getHousePhoto: (state, action) => {
      state.photos = action.payload;
    },
    // SET //
    setErrorsHouse: (state, action) => {
      state.errorsHouse = action.payload;
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
    setHouseFormPhoto: (state, action) => {
      if (state.photosForm[0]) {
        const array = state.photosForm.filter(
          (s) => s.target !== action.payload.target
        );
        array.push(action.payload);
        state.photosForm = array;
      } else {
        let array = [];
        array.push(action.payload);
        state.photosForm = array;
      }
    },
  },
});

export const {
  getFourHouses,
  getSearchHouses,
  getHouseDesc,
  getHouseBool,
  getHousePhoto,
  setErrorsHouse,
  setHouseFormDesc,
  setHouseFormDescType,
  setHouseFormDescCountry,
  setHouseFormBool,
  setHouseFormPhoto,
} = houseSlice.actions;

export default houseSlice.reducer;
