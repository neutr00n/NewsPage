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
                 <lable сlass="lable">Add To Favorite</lable>
                 <svg class="icon" width="16" height="16" viewBox="0 0 37 32">
								<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
								</svg>
                 <input type="checkbox"  class="button js-button_favorites"  data-idLenght=${idLenght}
                 >
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
