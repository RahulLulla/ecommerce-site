import "./index.css";
import "./reset.css";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="product-details" element={<ProductDetailsPage />} />
    </Routes>
  );
};

export default App;
