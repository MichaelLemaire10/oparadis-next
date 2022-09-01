import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';

const animalSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
      getAnimals: (state, action) => {
        state.animals = action.payload;
      },
    },
  })
  
export const { getAnimals } = animalSlice.actions
export default animalSlice.reducer