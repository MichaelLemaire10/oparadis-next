import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';

const plantSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {
      getPlants: (state, action) => {
        state.plants = action.payload;
      },
    },
  })
  
export const { getPlants } = plantSlice.actions
export default plantSlice.reducer