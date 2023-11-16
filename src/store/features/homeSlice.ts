import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeReducer",
  initialState: false,
  reducers: {
    isHome: (state) => !state,
  },
});

export const { isHome } = homeSlice.actions;
export default homeSlice.reducer;
