export const fetch_discover_products = () =>
  fetch("/api/discover_products")
    .then((response) => response.json())
    .then((data) => {
      return data.products;
    })
    .catch((error) => {
      console.error("Error fetching collection data:", error);
      return [];
    });
