import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reduxFeatures/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
