import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserAuth} from "../types";

const initialState: IUserAuth = {
    email: null,
    uid: null
};

const UserAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserAuth>) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
        },
        deleteUser: (state) => {
            state.email = null;
            state.uid = null;
        }
    }
})

export const { setUser, deleteUser } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;

