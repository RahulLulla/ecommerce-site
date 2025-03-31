import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import ProductDetailView from "../components/productDetails/ProductDetailView";
import { useDispatch } from "react-redux";
import { setPlaceholderValues as setDummyProductValues } from "../features/currentProduct/currentProductSlice";
import { setPlaceholderValues as setDummyRecommendValues } from "../features/recommendedProducts/recommendedProductsSlice";
// "@/currentProduct/currentProductSlice";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  dispatch(setDummyProductValues());
  dispatch(setDummyRecommendValues());

  return (
    <div id="product-details-page">
      <NavBar />
      <ProductDetailView />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
