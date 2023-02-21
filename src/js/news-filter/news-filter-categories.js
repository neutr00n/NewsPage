import { addWeather } from '../weather/index';
import { filterByCategory } from '../api/index';
import { listNews, notFound } from '../refs/index';
import { markUpPage } from '../markup/index';

let newsId = 0;

export async function getFilterByCategory(category) {
  try {
    const response = await filterByCategory(category);
    markUpByCategory(response);

    addWeather();
  } catch (err) {
    console.error(err);
  }
}

function markUpByCategory(category) {
  notFound.classList.add('not-found-hidden');
  if (!category) {
    listNews.innerHTML = '';
    notFound.classList.remove('not-found-hidden');
    return;
  }

  const markup = markupCategoriesNews(category);

  const weather = '<div class="weather"></div>';

  const endMarkup = weather + markup;
  listNews.innerHTML = endMarkup;
}

function markupCategoriesNews(arr) {
  let array = [];

  if (window.matchMedia('(max-width: 767px)').matches) {
    array = arr.slice(0, 4);
    return markUp(array);
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
  ) {
    array = arr.slice(0, 7);
    return markUp(array);
  } else {
    array = arr.slice(0, 8);
    return markUp(array);
  }
}

function markUp(arr) {
  const array = arr
    .map(
      (
        { multimedia, section, title, abstract, published_date, url, uri },
        idLenght = newsId
      ) => {
        let id = uri;
        let dateUser = new Date(published_date);
        let date = dateUser.toLocaleDateString().replaceAll('.', '/');
        let category = section || 'other';
        let photo =
          multimedia?.length !== 0
            ? `${multimedia[2].url}`
            : 'https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg';

        if (abstract?.length < 120) {
          return markUpPage(
            photo,
            title,
            abstract,
            date,
            url,
            category,
            id,
            idLenght
          );
        } else abstract = abstract.slice(0, 120) + '...';
        return markUpPage(
          photo,
          title,
          abstract,
          date,
          url,
          category,
          idLenght
        );
      }
    )
    .join('');
  return array;
}
