import { lazy } from "react";
import React from "react";

const Home = lazy(() => import("../pages/HomePage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/products/:category/:gender/:subcategory",
    element: <ProductsPage />,
  },
  { path: "/product_details", element: <ProductDetailsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
