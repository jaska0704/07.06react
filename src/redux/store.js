import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./service/todo-api";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer:{
        [todoApi.reducerPath]:todoApi.reducer,
    },
    middleware:(defaultMiddleware) => {
        return defaultMiddleware().prepend(todoApi.middleware);
    }
});

setupListeners(store.dispatch)