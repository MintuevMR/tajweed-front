import { configureStore } from "@reduxjs/toolkit";
import application from "../slices/appSlices";
import azkary from "../slices/azkarySlices"

export const store = configureStore({
  reducer: {
    application,
    azkary,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
