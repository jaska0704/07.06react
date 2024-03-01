import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/localstor";

const initialState = loadState("user") || {
  user: [],
  count: 0,
};

const userReduser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      const npm = state.user.find((item) => item.id === action.payload.id);
      if (!npm) {
        return {
          ...state,
          user: [...state.user, action.payload],
        };
      }
    },
  },
});

export default userReduser.reducer;
export const { add } = userReduser.actions;
