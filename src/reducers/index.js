import { combineReducers } from 'redux';
import booleansReducer from './booleans/slice';
import usersReducer from './users/slice';
import housesReducer from './houses/slice';
import animalsReducer from './animals/slice';
import plantsReducer from './plants/slice';


export const rootReducer = combineReducers({
    booleans : booleansReducer,
    houses : housesReducer,
    users: usersReducer,
    animals : animalsReducer,
    plants : plantsReducer
});
