import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showProductDetails(state, action) {
      state.productDetails = action.payload;
    },
    hideProductDetails(state) {
      state.productDetails = null;
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
