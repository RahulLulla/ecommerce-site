import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchResults from "../components/searchResults/SearchResults";
import Footer from "../components/footer/Footer";

const ProductsPage = () => {
  return (
    <div id="product-page">
      <NavBar />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default ProductsPage;
