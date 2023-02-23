import axios from 'axios';
axios.defaults.baseURL = 'https://api.nytimes.com/svc/';

export async function fetchCategories() {
  const searchParams = new URLSearchParams({
    'api-key': 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg',
  });

  const response = await axios.get(
    `news/v3/content/section-list.json?${searchParams}`
  );

  return response.data;
}

export async function fetchSearch(value, date) {
  const searchParams = new URLSearchParams({
    'api-key': '2Q5D7fvynyshAi0a8Zmy3AdyyqPFqoa6',
    begin_date: date,
    end_date: date,
  });

  const response = await axios.get(
    `search/v2/articlesearch.json?q=${value}&${searchParams}`
  );

  return response.data.response.docs;
}

export async function filterByCategory(category) {
  const searchParams = new URLSearchParams({
    'api-key': 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg',
  });

  const response = await axios.get(
    `news/v3/content/inyt/${category}.json?${searchParams}`
  );

  return response.data.results;
}

export async function popularNews() {
  const searchParams = new URLSearchParams({
    'api-key': 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6',
  });

  const response = await axios.get(
    `mostpopular/v2/viewed/1.json?${searchParams}`
  );
  return response;
}
