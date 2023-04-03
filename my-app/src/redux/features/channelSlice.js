import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channelData: {}
}

const channelSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setChannel: (state, action) => {
            console.log(action.payload);
            // state.channelData = 
        }
    }
})

const {actions, reducer} = channelSlice;
export const {setChannel} = actions;
export default channelSlice.reducer;

