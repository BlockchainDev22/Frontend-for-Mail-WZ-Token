import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    text: "",
    color: "",
};


const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {

        updateOpened(state, action) {
            state.open = action.payload;
        },

        updateText(state, action) {
            state.text = action.payload;
        },

        updateColor(state, action) {
            state.color = action.payload;
        }
    }
});

export const { updateOpened, updateText, updateColor } = alertSlice.actions;
export default alertSlice.reducer;