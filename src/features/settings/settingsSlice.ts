import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type AppSettings = {
  devMode: boolean;
  displayHiddenApplications: boolean;
};

const initialState: AppSettings = {
  devMode: false,
  displayHiddenApplications: false,
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    changeDevMode(state) {
      state.devMode = !state.devMode;
    },
    changeDisplayHiddenApplications(state) {
      state.displayHiddenApplications = !state.displayHiddenApplications;
    },
  },
});

export const { changeDevMode, changeDisplayHiddenApplications } =
  appSettingsSlice.actions;

export default appSettingsSlice.reducer;

export const getDevMode = (state: RootState) => state.appSettings.devMode;
export const getDisplayHidden = (state: RootState) =>
  state.appSettings.displayHiddenApplications;
