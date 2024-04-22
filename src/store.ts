import { configureStore } from "@reduxjs/toolkit";
import appSettingsReducer from "./features/settings/settingsSlice";
import searchReducer from "./features/search/searchSlice";
export const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
