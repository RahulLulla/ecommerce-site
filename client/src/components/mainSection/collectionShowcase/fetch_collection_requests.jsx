const fetch_collection = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.collection;
    })
    .catch((error) => {
      console.error("Error fetching collection data:", error);
      return [];
    });

export const fetch_best_sellers = () =>
  fetch_collection("/api/get_collections/best_sellers");

export const fetch_new_arrivals = () =>
  fetch_collection("/api/get_collections/new_arrivals");

export const fetch_featured = () =>
  fetch_collection("/api/get_collections/featured");
