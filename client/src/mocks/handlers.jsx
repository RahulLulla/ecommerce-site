import { http, HttpResponse } from "msw";
import {
  best_sellers,
  featured,
  new_arrivals,
} from "./data/mock_collection_data.jsx";
import { trending_category_items } from "./data/mock_trending_data.jsx";
import { discover_products } from "./data/mock_discover_data.jsx";
import { all_products } from "./data/mock_search_result_data.jsx";

export const handlers = [
  http.get("/api/get_collections/new_arrivals", () => {
    return HttpResponse.json({ collection: new_arrivals });
  }),

  http.get("/api/get_collections/best_sellers", () => {
    return HttpResponse.json({ collection: best_sellers });
  }),

  http.get("/api/get_collections/featured", () => {
    return HttpResponse.json({ collection: featured });
  }),

  http.get("/api/trending_category_items", () => {
    return HttpResponse.json({ trending: trending_category_items });
  }),

  http.get("/api/discover_products", () => {
    return HttpResponse.json({ products: discover_products });
  }),

  http.get("/api/search_results", ({ request }) => {
    console.log("Request URL:", request.url);
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const subcategory = url.searchParams.get("subcategory");
    const gender = url.searchParams.get("gender");
    const filtered_products = all_products.filter(
      (product) =>
        product.category === category &&
        product.subcategory === subcategory &&
        product.gender === gender
    );

    return HttpResponse.json({
      // comment below line later
      products: all_products,
      filtered_products: filtered_products,
    });
  }),
];
