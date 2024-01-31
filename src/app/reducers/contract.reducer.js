import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {
        eth: "",
        bsc: "",
        polygon: ""
    },
    contract: {
        eth: "",
        bsc: "",
        polygon: ""
    }
};

const contractSlice = createSlice({
    name: "contracts",
    initialState,
});

export default contractSlice.reducer;