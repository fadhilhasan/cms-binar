import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import carReducer from './features/carSlice';
import dropReducer from './features/dropdownSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    dropdown: dropReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
