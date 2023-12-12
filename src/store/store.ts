import { configureStore } from "@reduxjs/toolkit";
import isHome from "./features/homeSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: { isHome, cartSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
