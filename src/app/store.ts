import { configureStore } from '@reduxjs/toolkit';
import modalAuthSlice from "../features/ModalAuthSlice";

export const store = configureStore({
  reducer: {
    modalAuth: modalAuthSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
