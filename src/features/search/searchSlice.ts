import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../CustomTypes";

type SearchSettings = {
  searchQuery: string;
  filterColumnName: string;
  sort: string;
  sortType: "asc" | "desc";
};

const initialState: SearchSettings = {
  searchQuery: "",
  filterColumnName: "",
  sort: "id",
  sortType: "asc",
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

    setFilterColumnName(state, action) {
      state.filterColumnName = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSortValue,
  setFilterColumnName,
  setSortType,
} = searchSlice.actions;

export default searchSlice.reducer;

export const getSortValue = (state: RootState) => state.search.sort;
export const getFilterColumnName = (state: RootState) =>
  state.search.filterColumnName;
export const getSortType = (state: RootState) => state.search.sortType;
