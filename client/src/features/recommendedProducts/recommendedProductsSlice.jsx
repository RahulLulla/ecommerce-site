import { createSlice } from "@reduxjs/toolkit";
import { featuredForHer as recommendedProducts } from "../../constants/suggestions";

export const recommendedProductsSlice = createSlice({
  name: "recommendedProducts",
  initialState: {
    products: [],
  },
  reducers: {
    setPlaceholderValues: (state) => {
      state.products = recommendedProducts;
    },
  },
});

export const { setPlaceholderValues } = recommendedProductsSlice.actions;

export const getRecommendedProducts = (state) =>
  state.recommendedProducts.products;

export default recommendedProductsSlice.reducer;
