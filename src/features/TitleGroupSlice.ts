import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITitleGroup } from "../types";

const initialState: ITitleGroup = {
    title: null,
};

const TitleGroupSlice = createSlice({
    name: "titleGroup",
    initialState,
    reducers: {
        setTitleGroup: (state, action: PayloadAction<string | null>) => {
            state.title = action.payload;
        },
        removeTitleGroup: (state) => {
            state.title = null;
        }
    }
});

export const { setTitleGroup, removeTitleGroup } = TitleGroupSlice.actions;
export default TitleGroupSlice.reducer;