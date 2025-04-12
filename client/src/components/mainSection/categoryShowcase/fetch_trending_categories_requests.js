export const fetch_trending_categories = () =>
  fetch("/api/trending_category_items")
    .then((response) => response.json())
    .then((data) => {
      return data.trending;
    })
    .catch((error) => {
      console.error("Error fetching collection data:", error);
      return [];
    });
