import axios from 'axios';

export async function fetchCategories() {
  const API_KEY = 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg';
  const BASE_URL = 'https://api.nytimes.com/svc/';

  const response = await axios.get(
    `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`
  );

  return response.data;
}

export async function fetchSearch(value, date) {
  const API_KEY = '2Q5D7fvynyshAi0a8Zmy3AdyyqPFqoa6';
  const BASE_URL = 'https://api.nytimes.com/svc/';

  const response = await axios.get(
    `${BASE_URL}search/v2/articlesearch.json?q=${value}&api-key=${API_KEY}&begin_date=${date}&end_date=${date}`
  );

  return response.data.response.docs;
}
