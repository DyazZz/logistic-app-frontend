import { createSlice } from "@reduxjs/toolkit";
import { Application } from "../../CustomTypes";

type InitialState = {
  editingApplication: Application;
  isCreatingApplication: boolean;
};

const initialState: InitialState = {
  editingApplication: null,
  isCreatingApplication: false,
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setEditingApplication(state, action) {
      state.editingApplication = action.payload;
      state.isCreatingApplication = false;
    },
    setIsCreatingApplication(state, action) {
      state.isCreatingApplication = action.payload;
      state.editingApplication = null;
    },
  },
});

export const { setEditingApplication, setIsCreatingApplication } =
  applicationSlice.actions;

export default applicationSlice.reducer;
