import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
export const store = configureStore({
    reducer: {
        users: usersReducer,
    }, // Add reducers here
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
