import { configureStore } from "@reduxjs/toolkit";
import application from "../slices/appSlices";
import azkary from "../slices/azkarySlices";
import bookmarks from "../slices/bookmarkSlice";

export const store = configureStore({
  reducer: {
    application,
    azkary,
    bookmarks,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
