import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userDataReducer from './userDataSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
