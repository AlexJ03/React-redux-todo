import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalAuth } from "../types";

const initialState: IModalAuth = {
    open: false,
    tab: 0
}

const modalAuthSlice = createSlice({
    name: "modalAuth",
    initialState,
    reducers: {
        openModalAuth: (state, action: PayloadAction<number>) => {
            state.open = true;
            state.tab = action.payload;
        },
        closeModalAuth: (state) => {
            state.open = false;
            state.tab = 0;
        },
    }
})

export const { openModalAuth, closeModalAuth } = modalAuthSlice.actions;

export default modalAuthSlice.reducer;


