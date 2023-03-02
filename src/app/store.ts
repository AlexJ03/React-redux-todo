import { configureStore } from '@reduxjs/toolkit';
import modalAuthSlice from "../features/ModalAuthSlice";
import userAuthSlice from "../features/UserAuthSlice";
import modalTaskSlice from "../features/ModalTaskSlice";

export const store = configureStore({
  reducer: {
    modalAuth: modalAuthSlice,
    userAuth: userAuthSlice,
    modalTask: modalTaskSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
