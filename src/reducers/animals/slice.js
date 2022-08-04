import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';

const animalSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
      getAnimal:(state) => {
        state.animal = 'Chat'
      },
    },
  })
  
export const { getAnimal } = animalSlice.actions
export default animalSlice.reducer