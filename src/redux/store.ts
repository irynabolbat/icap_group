import { configureStore } from '@reduxjs/toolkit';
import authorizeReducer from './authorizeSlice';

export const store = configureStore({
  reducer: {
    authorize: authorizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
