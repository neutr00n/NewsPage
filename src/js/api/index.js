import axios from 'axios';

export async function fetchCategories() {
  const API_KEY = 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg';
  const BASE_URL = 'https://api.nytimes.com/svc/';

  const response = await axios.get(
    `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`
  );

  return response.data;
}
