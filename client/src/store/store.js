import { configureStore } from "@reduxjs/toolkit";
import currentProductSlice from "../features/currentProduct/currentProductSlice";
import recommendedProductsSlice from "../features/recommendedProducts/recommendedProductsSlice";

export const store = configureStore({
  reducer: {
    //  Remove later and add fetch. Use route parameter info to get product rather than wasting store.
    currentProduct: currentProductSlice,
    recommendedProducts: recommendedProductsSlice,
  },
});
