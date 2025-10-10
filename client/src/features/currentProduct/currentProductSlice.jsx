import { createSlice } from "@reduxjs/toolkit";
import { images } from "../../constants/suggestions";

export const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState: {
    productId: null,
    productNav: "",
    productTitle: "",
    productDescription: "",
    productPrice: null,
    productspecData: [],
    productAdditionalData: [],
    image: null,
    productImages: "",
    gender: "",
    mainCategory: "",
    subCategory: null,
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.productNav = action.payload;
    },
    setPlaceholderValues: (state) => {
      state.productId = 1;
      state.productNav = "Bags / Women's Handbags / Duffel Bags / ABC Product";
      state.productTitle = "Men's Tree Dasher 2";
      state.productDescription =
        "Breathable Knit Active Shoe, Made From Natural Materials for Everyday Performance";
      state.productPrice = 12;
      state.productspecData = [
        { key: "Material", values: "Stainless Steel" },
        { key: "Color", values: "Gold" },
        { key: "Weight", values: "50.1g" },
      ];
      state.image = images[0];
      state.productAdditionalData = [
        { key: "Customer Reviews", values: "4.0 out of 5 stars" },
        { key: "Manufacturer", values: "ABC Co Ltd" },
        { key: "Country of Origin", values: "India" },
        { key: "Importer", values: "PQR Pvt Ltd" },
      ];
      state.productImages = images;
      state.gender = "women";
      state.mainCategory = "watches";
      state.subCategory = "automatic watches";
    },
  },
});

export const { setPlaceholderValues } = currentProductSlice.actions;

export const getCurrentProductImages = (state) =>
  state.currentProduct.productImages;
export const getCurrentProduct = (state) => state.currentProduct;

export default currentProductSlice.reducer;
