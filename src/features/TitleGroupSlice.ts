import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITitleGroup } from "../types";

const initialState: ITitleGroup = {
    title: null,
};

const TitleGroupSlice = createSlice({
    name: "titleGroup",
    initialState,
    reducers: {
        setTitleGroup: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
});

export const { setTitleGroup } = TitleGroupSlice.actions;
export default TitleGroupSlice.reducer;