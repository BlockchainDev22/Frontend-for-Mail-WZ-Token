import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    won: "0",
    signup: "100",
    share: "0",
    total: "0"
};


const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {

        updateWon(state, action) {
            state.won = action.payload;
        },

        updateSignup(state, action) {
            state.signup = action.payload;
        },

        updateShare(state, action) {
            state.share = action.payload;
        },

        updateTotal(state, action) {
            state.total = action.payload;
        }
    }
});

export const { updateWon, updateSignup, updateShare, updateTotal } = balanceSlice.actions;
export default balanceSlice.reducer;