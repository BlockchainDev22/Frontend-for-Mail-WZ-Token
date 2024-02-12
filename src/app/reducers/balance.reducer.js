import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    won: "0",
    signup: "100",
    referral: "0",
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

        updateReferral(state, action) {
            state.referral = action.payload;
        },

        updateTotal(state, action) {
            state.total = action.payload;
        }
    }
});

export const { updateWon, updateSignup, updateReferral, updateTotal } = balanceSlice.actions;
export default balanceSlice.reducer;