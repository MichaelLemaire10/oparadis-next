import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./init";

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    getHouses: (state, action) => {
      state.houses = action.payload
    },
    updateHouse: (state, action) => {
      console.log('type:', action.type);
      state.title = action.payload
    },
  },
});

export const { getHouses, updateHouse } = houseSlice.actions
export default houseSlice.reducer
