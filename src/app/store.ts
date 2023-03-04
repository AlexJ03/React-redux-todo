import { configureStore } from '@reduxjs/toolkit';
import modalAuthSlice from "../features/ModalAuthSlice";
import userAuthSlice from "../features/UserAuthSlice";
import modalTaskSlice from "../features/ModalTaskSlice";
import btnTasksGroupsSlice from "../features/BtnTasksGroupsSlice";
import modalCreateGroupSlice from "../features/ModalCreateGroupSlice";

export const store = configureStore({
  reducer: {
    modalAuth: modalAuthSlice,
    userAuth: userAuthSlice,
    modalTask: modalTaskSlice,
    btnTaskGroup: btnTasksGroupsSlice,
    modalCreateGroup: modalCreateGroupSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
