import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
}

const ModalCreateGroupSlice = createSlice({
    name: "modalCreateGroup",
    initialState,
    reducers: {
        openModalCreateGroup: (state) => {
            state.open = true;
        },
        closeModalCreateGroup: (state) => {
            state.open = false;
        }
    }
});

export const { openModalCreateGroup, closeModalCreateGroup } = ModalCreateGroupSlice.actions;
export default ModalCreateGroupSlice.reducer;

