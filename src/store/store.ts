import { configureStore } from "@reduxjs/toolkit";
import isHome from "./features/homeSlice";
export const store = configureStore({
  reducer: { isHome },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
