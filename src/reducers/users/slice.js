import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      getUser(state) {
        state.firstname = 'Robert',
        state.lastname = 'U'
      },
    },
  })
  
export const { getUser } = userSlice.actions
export default userSlice.reducer