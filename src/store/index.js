import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
//! import { rootReducer } from '../reducers';
import { api } from "../services";
import booleansReducer from "../reducers/booleans/slice";
import usersReducer from "../reducers/users/slice";
import housesReducer from "../reducers/houses/slice";
import animalsReducer from "../reducers/animals/slice";
import plantsReducer from "../reducers/plants/slice";
import authReducer from '../reducers/auth/slice';

//! Impossible d'utiliser la fonction combineReducers pour le moment
//! Probleme entre la config de redux/query et redux/toolkit
// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return rootReducer(state, action);
//   }
// };

export const makeStore = () =>
  configureStore({
    reducer: {
      booleans: booleansReducer,
      houses: housesReducer,
      users: usersReducer,
      animals: animalsReducer,
      plants: plantsReducer,
      auth: authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
      devTools: true
  });

export const wrapper = createWrapper(makeStore, { debug: true });
