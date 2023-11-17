import appReducer from './reducers';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

// Configure the Redux store with reducers
export const store = configureStore({
  reducer: appReducer,
});

// Define the type for dispatching actions
export type AppDispatch = typeof store.dispatch;

// Define the type for the root state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

// Define the type for asynchronous thunks
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
