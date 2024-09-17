import { configureStore } from '@reduxjs/toolkit';
import pincodeReducer from './PincodeSlice';

export const store = configureStore({
  reducer: {
    pincode: pincodeReducer,
  },
});
