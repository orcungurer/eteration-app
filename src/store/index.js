import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    filter: filterSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
