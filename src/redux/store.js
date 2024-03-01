import { configureStore } from "@reduxjs/toolkit";
import service from "./service";
import { apiReducer } from "./service";
import { reducerLocal } from "./reduser";



export const store = configureStore({
  reducer: {
    ...apiReducer,
    ...reducerLocal,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(...service.map((api) => api.middleware));
  },
});