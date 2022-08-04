import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';

const plantSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {
      getPlant: (state) => {
        state.plant = 'menthe'
      },
    },
  })
  
export const { getPlant } = plantSlice.actions
export default plantSlice.reducer