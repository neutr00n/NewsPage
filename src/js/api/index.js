import axios from 'axios';

export async function fetchCategories() {
  const API_KEY = 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg';
  const BASE_URL = 'https://api.nytimes.com/svc/';

  const response = await axios.get(
    `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`
  );

  return response.data;
}

export function fetchPopular() {
  const API_KEY_P = 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6';
  const response = axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY_P}`
    )
return response
}

export function fetchSearch(date, name) {
    const API_KEY_S = '2Q5D7fvynyshAi0a8Zmy3AdyyqPFqoa6';
  const response = axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=${API_KEY_S}&begin_date=${date}&end_date=${date}`
  )
  return response
  }