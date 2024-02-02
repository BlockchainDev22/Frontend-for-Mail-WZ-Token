import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    wallet: ""
}

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAuth(state, action) {
            state = {...state, ...action.payload}
        }
    }
});

export const { updateAuth } = userSlice.actions;
export default userSlice.reducer;