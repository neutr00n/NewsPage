!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=o.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},o.parcelRequired7c6=a),a.register("4vdsI",(function(t,e){var o=document.querySelector(".header-btn__open-modal"),i=document.querySelector(".header-btn__close-modal"),n=document.querySelector(".mobile-modal"),a=document.querySelector(".switcher-wrapper");function r(){n.classList.toggle("is-open"),a.classList.toggle("mobile")}o.addEventListener("click",r),i.addEventListener("click",r)})),a.register("8jECO",(function(e,o){var i,n,r,s,l,c=a("8nrFW"),f=document.querySelectorAll(".switcher__radio"),d=document.querySelector(".switcher-icon--light"),m=document.querySelector(".switcher-icon--dark"),p=document.querySelector(".switcher-indicator--light"),u=document.querySelector(".switcher-indicator--dark"),y=document.body.dataset.set;function x(t){var e,o=t.target.value;g(o),e=o,localStorage.setItem("color-scheme",e)}function g(t){"dark"===t?(document.body.removeAttribute("light"),document.body.setAttribute("dark","dark"),d.classList.remove("is-light"),p.classList.remove("is-light"),m.classList.add("is-dark"),u.classList.add("is-dark")):(document.body.removeAttribute("dark"),document.body.setAttribute("light","light"),d.classList.add("is-light"),p.classList.add("is-light"),m.classList.remove("is-dark"),u.classList.remove("is-dark"))}t(c)(f).forEach((function(t){return t.addEventListener("change",x)})),null!==(i=localStorage.getItem("color-scheme"))&&(document.querySelector(".switcher__radio[value=".concat(i,"]")).checked=!0,g(i)),n=document.querySelectorAll("a[data-set]"),(r=t(c)(n).find((function(t){return t.dataset.set===y}))).dataset.set===y&&r.classList.add("header-list__link--current"),s=document.querySelectorAll("li[data-mobile]"),(l=t(c)(s).find((function(t){return t.dataset.mobile===y}))).dataset.mobile===y&&(l.classList.add("modal-list__item--current"),l.querySelector(".modal-list__link").classList.add("modal-list__link--current"))})),a.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return o.default(t)||i.default(t)||r.default(t)||n.default()};var o=s(a("kMC0W")),i=s(a("7AJDX")),n=s(a("8CtQK")),r=s(a("auk6i"));function s(t){return t&&t.__esModule?t:{default:t}}})),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return i.default(t)};var o,i=(o=a("8NIkP"))&&o.__esModule?o:{default:o}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return i.default(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i.default(t,e)};var o,i=(o=a("8NIkP"))&&o.__esModule?o:{default:o}})),a.register("bpWze",(function(t,o){e(t.exports,"setStorage",(function(){return i})),e(t.exports,"getStorage",(function(){return n}));var i=function(t,e){try{var o=JSON.stringify(e);localStorage.setItem(t,o)}catch(t){console.error("Set state error: ",t.message)}},n=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error(t.statusText)}}})),a.register("aDyNI",(function(t,o){function i(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).display_name;return'\n  <li class="categories-filter__element">\n    <a href="" class="categories-filter__link js-categories-filter__link" data=\''.concat(t,"'>").concat(t,"</a>\n  </li>\n  ")}function n(t,e,o,i,n,a,r,s){return'<div class="set" data-id='.concat(r,'>\n      <div class="overlay noActive-over"></div>\n      <div class="thumb">\n        <img class="img-news" src="').concat(t,'" alt="" width="288"\n        onerror= src="https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg">\n        <p class="already-read-button noActive-rmBtn">Already read<span class=\'already-read__container\'><svg class=\'already-read__icon\' width="15" height="10" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M15.1885 0.594133C15.0326 0.598778 14.8847 0.663925 14.776 0.775774L5.6002 9.95155L1.82442 6.17577C1.76913 6.11819 1.70291 6.07222 1.62963 6.04054C1.55635 6.00887 1.47749 5.99214 1.39767 5.99133C1.31784 5.99052 1.23866 6.00564 1.16475 6.03581C1.09085 6.06599 1.0237 6.11061 0.967257 6.16705C0.91081 6.2235 0.866193 6.29064 0.83602 6.36455C0.805846 6.43846 0.790723 6.51764 0.791535 6.59746C0.792347 6.67729 0.809079 6.75615 0.84075 6.82943C0.872421 6.9027 0.918394 6.96892 0.975978 7.02421L5.17598 11.2242C5.2885 11.3367 5.44109 11.3999 5.6002 11.3999C5.7593 11.3999 5.91189 11.3367 6.02442 11.2242L15.6244 1.62421C15.7111 1.53993 15.7703 1.43143 15.7943 1.31292C15.8183 1.19441 15.8059 1.07141 15.7588 0.960063C15.7117 0.848712 15.632 0.754194 15.5302 0.688897C15.4285 0.623599 15.3093 0.590569 15.1885 0.594133Z"></path>\n</symbol>\n</svg ></span></p >\n        <button class="name-category">').concat(a,'</button >\n        <div class="button_add">\n                 <lable сlass="lable">AddToFavorite</lable>\n                 <svg class="icon" width="16" height="16" viewBox="0 0 37 32">\n\t\t\t\t\t\t\t\t<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n\t\t\t\t\t\t\t\t</svg>\n                 <input type="checkbox"  class="button js-button_favorites"  data-idLenght=').concat(s,'\n                 >\n        </div>\n      </div>\n      <h2 class="title">').concat(e,'</h2>\n      <p class="text">').concat(o,'</p>\n      <div class="wrapper">\n      <p class="date">').concat(i,'</p>\n      <a href="').concat(n,'" class="read" target="_blank" rel="noreferrer noopener">Read more</a>\n      </div>\n  </div>  ')}e(t.exports,"createCategoriesMarkup",(function(){return i})),e(t.exports,"markUpPage",(function(){return n}))})),a.register("7rHhr",(function(t,o){e(t.exports,"categoriesFilter",(function(){return i})),e(t.exports,"categoriesFilterBtn",(function(){return n})),e(t.exports,"categoriesFilterIcon",(function(){return a})),e(t.exports,"categoriesFilterContainer",(function(){return r})),e(t.exports,"jsCategoryBtn",(function(){return s})),e(t.exports,"searchForm",(function(){return l})),e(t.exports,"listNews",(function(){return c})),e(t.exports,"notFound",(function(){return f})),e(t.exports,"readNewsDateContainer",(function(){return d}));var i=document.querySelector(".js-categories-filter"),n=document.querySelector(".js-categories-filter__btn"),a=document.querySelector(".js-categories-filter__icon"),r=document.querySelector(".js-categories-filter__container"),s=document.querySelectorAll(".js-category-btn"),l=(document.querySelector(".header-form__input"),document.querySelector(".header-form")),c=document.querySelector(".list-news"),f=document.querySelector(".not-found"),d=document.querySelector(".read-date-news")})),a.register("h6c0i",(function(t,e){var i,n;i=void 0!==o?o:"undefined"!=typeof window?window:t.exports,n=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,m=function(s,f,m,u){if(!l("body"))return!1;e||p.Notify.init({});var y=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof u&&!Array.isArray(u)){var x={};"object"==typeof m?x=m:"object"==typeof u&&(x=u),e=c(!0,e,x)}var g,b,h=e[s.toLocaleLowerCase("en")];d++,"string"!=typeof f&&(f="Notiflix "+s),e.plainText&&(g=f,(b=t.document.createElement("div")).innerHTML=g,f=b.textContent||b.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(w.id=r.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var v=t.document.getElementById(r.overlayID)||t.document.createElement("div");v.id=r.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=e.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=h.backOverlayColor||e.backOverlayColor,v.className=e.cssAnimation?"nx-with-animation":"",v.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+d,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var C="";s===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(r.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var A=t.document.getElementById(k.id);if(A){var _,S,z=function(){A.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(_)},L=function(){if(A&&null!==A.parentNode&&A.parentNode.removeChild(A),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){L(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&A.addEventListener("click",(function(){"function"==typeof m&&m(),z();var t=setTimeout((function(){L(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var W=function(){_=setTimeout((function(){z()}),e.timeout),S=setTimeout((function(){L()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(A.addEventListener("mouseenter",(function(){A.classList.add("nx-paused"),clearTimeout(_),clearTimeout(S)})),A.addEventListener("mouseleave",(function(){A.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&d>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),M=0;M<O.length;M++){var j=O[M];null!==j.parentNode&&j.parentNode.removeChild(j)}e=c(!0,e,y)},p={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){m(o,t,e,i)},failure:function(t,e,o){m(i,t,e,o)},warning:function(t,e,o){m(n,t,e,o)},info:function(t,e,o){m(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return n(i)})):"object"==typeof t.exports?t.exports=n(i):i.Notiflix=n(i)}))}();
//# sourceMappingURL=read.0dc6a859.js.map
