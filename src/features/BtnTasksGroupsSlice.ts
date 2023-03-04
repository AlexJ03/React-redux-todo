import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    tab: 0
}

const BtnTasksGroupsSlice = createSlice({
    name: "btnTasksGroups",
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<number>) => {
            state.tab = action.payload;
        }
    }
});

export const { setTab } = BtnTasksGroupsSlice.actions;
export default BtnTasksGroupsSlice.reducer;