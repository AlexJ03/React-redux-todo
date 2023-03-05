import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const ModalSettingsGroupsSlice = createSlice({
    name: "modalSettingsGroups",
    initialState,
    reducers: {
        openModalSettingsGroups: (state) => {
            state.open = true;
        },
        closeModalSettingsGroups: (state) => {
            state.open = false;
        }
    }
});

export const { openModalSettingsGroups, closeModalSettingsGroups } = ModalSettingsGroupsSlice.actions;
export default ModalSettingsGroupsSlice.reducer;