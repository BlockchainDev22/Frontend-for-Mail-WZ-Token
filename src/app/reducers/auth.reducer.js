import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
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
            state = { ...state, ...action.payload };
        },
        updateWallet(state, action) {
            state.wallet = action.payload;
        },
        updateWalletConnected(state, action) {
            state.isWalletConnected = action.payload;
        },
        updateLoading(state, action) {
            state.isLoading = action.payload;
        },
        updateId(state, action) {
            state.id = action.payload;
        },
        updateName(state, action) {
            state.name = action.payload;
        },
        updateEmail(state, action) {
            state.email = action.payload;
        }
    }
});

export const { updateAuth, updateWallet, updateWalletConnected, updateLoading, updateId, updateEmail, updateName } = userSlice.actions;
export default userSlice.reducer;