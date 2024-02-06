import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    wallet: "",
    isWalletConnected: false,
    isLoading: false
}

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAuth(state, action) {
            state = {...state, ...action.payload};
        },
        updateWallet(state, action) {
            state.wallet = action.payload;
        },
        updateWalletConnected(state, action) {
            state.isWalletConnected = action.payload;
        },
        updateLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { updateAuth, updateWallet, updateWalletConnected, updateLoading } = userSlice.actions;
export default userSlice.reducer;