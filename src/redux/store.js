import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

// Even though the rot-reducer.js file doesnt have this export,
// combineReducers return them by the name rootReducer
import rootReducer from "../redux/root-reducer"; 

const middlewares = [logger]; // all the logs into an array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;