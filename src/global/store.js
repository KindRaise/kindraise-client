import { configureStore } from "@reduxjs/toolkit";
import myReducer from './slice.js';

export const store = configureStore({
  reducer: {
    app: myReducer
  }
})