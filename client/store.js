import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reduxFeatures/basketSlice';
import restaurantReducer from './reduxFeatures/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
