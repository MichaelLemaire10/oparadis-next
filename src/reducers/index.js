import { combineReducers } from 'redux';
import housesReducer from './houses/slice';
// import UsersReducer from './users/slice';

export const rootReducer = combineReducers({
    houses : housesReducer,
    // users: UsersReducer,
});
