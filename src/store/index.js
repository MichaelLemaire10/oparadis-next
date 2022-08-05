import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { rootReducer } from '../reducers';
  
  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return rootReducer(state, action);
    }
  };
  
  export const makeStore = () => configureStore({ reducer });
  
  export const wrapper = createWrapper(makeStore, { debug: true });
