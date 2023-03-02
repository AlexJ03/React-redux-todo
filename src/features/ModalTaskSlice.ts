import { createSlice } from "@reduxjs/toolkit";
import { IModalTask } from "../types";

const initialState: IModalTask = {
    open: false
};

const ModalTaskSlice = createSlice({
    name: "modalTask",
    initialState,
    reducers: {
        openModalCreateTask: (state) => {
          state.open = true;
        },
        closeModalCreateTask: (state) => {
            state.open = false;
        }
    }
});

export const { openModalCreateTask, closeModalCreateTask } = ModalTaskSlice.actions;
export default ModalTaskSlice.reducer;