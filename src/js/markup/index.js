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
       <p class="already-read-button noActive-rmBtn">Already read
  <span class='already-read__container'>
<svg class="already-read__icon" width="18" height="18" aria-hidden="true" viewBox="0 0 16 12"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15.1885 0.594133C15.0326 0.598778 14.8847 0.663925 14.776 0.775774L5.6002 9.95155L1.82442 6.17577C1.76913 6.11819 1.70291 6.07222 1.62963 6.04054C1.55635 6.00887 1.47749 5.99214 1.39767 5.99133C1.31784 5.99052 1.23866 6.00564 1.16475 6.03581C1.09085 6.06599 1.0237 6.11061 0.967257 6.16705C0.91081 6.2235 0.866193 6.29064 0.83602 6.36455C0.805846 6.43846 0.790723 6.51764 0.791535 6.59746C0.792347 6.67729 0.809079 6.75615 0.84075 6.82943C0.872421 6.9027 0.918394 6.96892 0.975978 7.02421L5.17598 11.2242C5.2885 11.3367 5.44109 11.3999 5.6002 11.3999C5.7593 11.3999 5.91189 11.3367 6.02442 11.2242L15.6244 1.62421C15.7111 1.53993 15.7703 1.43143 15.7943 1.31292C15.8183 1.19441 15.8059 1.07141 15.7588 0.960063C15.7117 0.848712 15.632 0.754194 15.5302 0.688897C15.4285 0.623599 15.3093 0.590569 15.1885 0.594133Z">
  </path>
</svg>
  </span>
  </p>
        <button class="name-category">${category}</button >
        <div class="button_add">
                 <lable сlass="lable">Add to favorite</lable>
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

export function createPaginationFirstBtnMarkup(page) {
  return `
        <a class="pagination__btn pagination__btn-stat js-pagination__page-btn current-page " href="#news" data-pages='${page}'>${page}</a>
  `;
}

export function createPaginationBtnMarkup(page) {
  return `
        <a class="pagination__btn pagination__btn-stat js-pagination__page-btn " href="#news" data-pages='${page}'>${page}</a>
  `;
}
