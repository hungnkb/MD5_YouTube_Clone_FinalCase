import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined: false,
    user: {},
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogined = action.payload.isLogined;
            state.user = action.payload.user     
        }
    }
})

const {actions, reducer} = authSlice;
export const {login} = actions;
export default authSlice.reducer;

