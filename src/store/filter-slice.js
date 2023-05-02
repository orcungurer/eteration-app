import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchbar: "",
  selectedSort: "default",
  selectedBrands: [],
  selectedModels: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setSearchbar(state, action) {
      state.searchbar = action.payload;
    },
    selectedSort(state, action) {
      state.selectedSort = action.payload;
    },
    selectedBrand(state, action) {
      const selected = action.payload;
      if (state.selectedBrands.includes(selected)) {
        state.selectedBrands = state.selectedBrands.filter(
          (brand) => brand !== selected
        );
      } else {
        state.selectedBrands.push(selected);
      }
    },
    selectedModel(state, action) {
      const selected = action.payload;
      if (state.selectedModels.includes(selected)) {
        state.selectedModels = state.selectedModels.filter(
          (model) => model !== selected
        );
      } else {
        state.selectedModels.push(selected);
      }
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;