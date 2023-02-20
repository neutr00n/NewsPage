export function createCategoriesMarkup({ display_name } = {}) {
  return `
  <li class="categories-filter__element">
    <a href="" class="categories-filter__link js-categories-filter__link" data='${display_name}'>${display_name}</a>
  </li>
  `;
}

export function markUpPage(
  photo,
  title,
  abstract,
  date,
  url,
  category,
  id,
  idLenght
) {
  return `<div class="set" data-id=${id}>
      <div class="overlay noActive-over"></div>
      <div class="thumb">
        <img class="img-news" src="${photo}" alt="" width="288"
        onerror= src="https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg">
        <p class="already-read-button noActive-rmBtn">Already read</p >
        <button class="name-category">${category}</button >
        <div class="button_add">
                 <lable сlass="lable">AddToFavorite</lable>
                 <input type="checkbox"  class="button js-button_favorites"  data-idLenght=${idLenght}>
        </div>
      </div>
      <h2 class="title">${title}</h2>
      <p class="text">${abstract}</p>
      <div class="wrapper">
      <p class="date">${date}</p>
      <a href="${url}" class="read" target="_blank" rel="noreferrer noopener">Read more</a>
      </div>
  </div>  `;
}
