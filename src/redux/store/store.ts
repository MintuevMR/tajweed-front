import { configureStore } from "@reduxjs/toolkit";
import application from "../slices/appSlices";
import azkary from "../slices/azkarySlices"
import lessons from "../slices/lessonSlice" 

export const store = configureStore({
  reducer: {
    application,
    azkary,
    lessons
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
