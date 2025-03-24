import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import ProductDetailView from "../components/productDetails/ProductDetailView";

const ProductDetailsPage = () => {
  return (
    <div id="product-details-page">
      <NavBar />
      <ProductDetailView />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
