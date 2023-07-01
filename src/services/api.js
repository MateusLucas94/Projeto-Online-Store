export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId && !query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query && !categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductById(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
