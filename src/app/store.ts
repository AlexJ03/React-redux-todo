import { configureStore } from '@reduxjs/toolkit';
import modalAuthSlice from "../features/ModalAuthSlice";
import userAuthSlice from "../features/UserAuthSlice";

export const store = configureStore({
  reducer: {
    modalAuth: modalAuthSlice,
    userAuth: userAuthSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
