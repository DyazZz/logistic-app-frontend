import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../CustomTypes";

type SearchSettings = {
  searchQuery: string;
  sort: string;
};

const initialState: SearchSettings = {
  searchQuery: "",
  sort: "id",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortValue(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSearchQuery, setSortValue } = searchSlice.actions;

export default searchSlice.reducer;

export const getSortValue = (state: RootState) => state.search.sort;
