export function createCategoriesMarkup({ display_name } = {}) {
  return `
  <li class="categories-filter__element">
    <a href="" class="categories-filter__link js-categories-filter__link" data='${display_name}'>${display_name}</a>
  </li>
  `;
}
