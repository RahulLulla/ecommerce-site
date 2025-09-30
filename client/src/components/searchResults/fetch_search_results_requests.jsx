export const fetch_search_results = async (category, subcategory, gender) => {
  const params = new URLSearchParams();
  params.append("category", category);
  params.append("subcategory", subcategory);
  params.append("gender", gender);

  try {
    const response = await fetch(`/api/search_results?${params}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching collection data:", error);
    return [];
  }
};
