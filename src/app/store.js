import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import alertReducer from "./reducers/alert.reducer";
import contractReducer from "./reducers/contract.reducer";
import balanceReducer from "./reducers/balance.reducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
        contract: contractReducer,
        balance: balanceReducer
    }
});
