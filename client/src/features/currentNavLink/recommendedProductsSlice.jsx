import { createSlice } from "@reduxjs/toolkit";

export const currentNavLinkSlice = createSlice({
  name: "currentNavLink",
  initialState: {
    products: [],
  },
  reducers: {
    setPlaceholderValues: (state) => {
      state.products = "";
    },
  },
});

export const { setPlaceholderValues } = currentNavLinkSlice.actions;

export const getRecommendedProducts = (state) => state.currentNavLink.products;

export default currentNavLinkSlice.reducer;
