import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "./features/filterSlice"


// Create the Redux store
const store = configureStore({
  reducer: filterReducer
});

export default store;