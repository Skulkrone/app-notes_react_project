import { configureStore, combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesReducer";
import selectedReducer from "./notes/selectedReducer";

const rootReducer = combineReducers({
  notesReducer,
  selectedReducer
})

const store = configureStore({reducer: rootReducer})

export default store;