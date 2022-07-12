import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./init";

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    getFourHouses: (state) => {
      state.getFourHouses
    },
    updateHouse: (state, action) => {
      state.title = action.payload
    },
  },
});

export const { getFourHouses, updateHouse } = houseSlice.actions
export default houseSlice.reducer
