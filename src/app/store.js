import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import alertReducer from "./reducers/alert.reducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer
    }
});
