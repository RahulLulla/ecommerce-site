import "./index.css";
import "./reset.css";
import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const routesDetails = routes.map(({ path, element }, index) => (
    <Route key={index} path={path} element={element} />
  ));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>{routesDetails}</Routes>
    </>
  );
};

export default App;
