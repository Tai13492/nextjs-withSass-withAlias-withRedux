import { combineReducers, createStore } from "redux";
import homeReducer from "./home";

const reducers = {
  homeReducer
};

const combinedReducers = combineReducers(reducers);

const combinedStores = initialState => {
  return createStore(combinedReducers, initialState);
};

export default combinedStores;
