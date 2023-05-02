import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    fillProducts(state, action) {
      state.products = action.payload.products;
    },
  },
});

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );

      if (!response.ok) {
        throw new Error("Could not fetch product data!");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const productData = await fetchData();
      // console.log(productData);

      dispatch(
        productActions.fillProducts({
          products: productData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const productActions = productSlice.actions;
export default productSlice;
