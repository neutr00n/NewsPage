!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("4vdsI"),n("8jECO");var o,a=n("aDyNI"),i=document.querySelector(".list-news"),d=localStorage.getItem("ID-SAVE-FAVORITE"),s=JSON.parse(d)||[];function u(){s.map((function(e){i.querySelectorAll(".set").forEach((function(t){t.dataset.id===e.id&&(t.querySelector(".js-button_favorites").setAttribute("checked","true"),t.querySelector(".js-button_favorites").classList.add("add"),t.querySelector("svg").classList.add("add"),t.querySelector("lable").innerHTML="Remove From Favorite")}))}))}i.addEventListener("change",(function(e){if(!e.target.classList.contains("button"))return;if(e.target.classList.contains("add")){var t=+s.findIndex((function(t){return t.idLenght===+e.target.attributes[2].value}));console.log(e.target.attributes[2].value),s.splice(t,1),localStorage.setItem("ID-SAVE-FAVORITE",JSON.stringify(s)),e.target.parentNode.parentNode.parentNode.remove()}})),o=s.map((function(e){var t=e.url,r=(e.media,e.title),n=e.abstract,o=e.date,i=e.photo,d=e.id,s=e.idLenght,u=e.category;return console.log(r),(0,a.markUpPage)(i,r,n,o,t,u,d,s)})).join(""),i.insertAdjacentHTML("beforeend",o),u();var l=n("h6c0i"),c=n("7rHhr"),f=n("bpWze");a=n("aDyNI");c.searchForm.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.search.value.trim().toLowerCase();if(!t)return r="What would you like to find?",void l.Notify.info(r);var r;(function(e){var t="ID-SAVE-FAVORITE",r=document.querySelector(".list-news");r.innerHTML="";var n=(0,f.getStorage)(t).filter((function(t){return t.title.toLowerCase().includes(e)}));(function(e){c.notFound.classList.add("not-found-hidden"),0===e.length&&c.notFound.classList.remove("not-found-hidden")})(n),function(e,t){var r=e.map((function(e){var t=e.photo,r=e.title,n=e.abstract,o=e.date,i=e.url,d=e.category,s=e.id,u=e.idLenght;return(0,a.markUpPage)(t,r,n,o,i,d,s,u)})).join("");t.innerHTML=r}(n,r),u()})(t),e.currentTarget.reset()}))}();
//# sourceMappingURL=favorite.2afcfc87.js.map
