import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";


const persistenceMiddleWare = (store) => (next) => (action) => {

    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState().users));
}



export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => {return getDefaultMiddleware().concat(persistenceMiddleWare)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch