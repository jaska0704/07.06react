import { configureStore } from "@reduxjs/toolkit";
import service from "./service";
import { apiReducer } from "./service";
import { reducerLocal } from "./reduser";
import { saveState } from "../config/localstor";

export const store = configureStore({
  reducer: {
    ...apiReducer,
    ...reducerLocal,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(...service.map((api) => api.middleware));
  },
});

store.subscribe(() => saveState("datauser", store.getState().user));
