import { configureStore } from "@reduxjs/toolkit";
import currentProductSlice from "../features/currentProduct/currentProductSlice";
import recommendedProductsSlice from "../features/recommendedProducts/recommendedProductsSlice";

export const store = configureStore({
  reducer: {
    currentProduct: currentProductSlice,
    recommendedProducts: recommendedProductsSlice,
  },
});
