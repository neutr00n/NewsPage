!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("4vdsI"),r("8jECO");var a,o=r("bpWze"),i=r("aDyNI"),d=r("7rHhr"),s=(d=r("7rHhr"),"ID-SAVE-FAVORITE"),l=localStorage.getItem("ID-SAVE-FAVORITE"),c=JSON.parse(l)||[],u=0,f=function(e){e.target.classList.contains("button")&&(e.target.classList.contains("add")?h(e):g(e))},h=function(e){var t=+c.findIndex((function(t){return t.idLenght===+e.target.attributes[2].value}));c.splice(t,1),localStorage.setItem(s,JSON.stringify(c)),e.target.parentNode.childNodes[1].innerHTML="Add To Favorite",e.target.classList.remove("add"),e.target.parentNode.childNodes[3].classList.remove("add")},g=function(e){var t={photo:e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].attributes[1].value,date:e.target.parentNode.parentNode.parentNode.childNodes[9].childNodes[1].innerText,url:e.target.parentNode.parentNode.parentNode.childNodes[9].childNodes[3].attributes[0].value,title:e.target.parentNode.parentNode.parentNode.childNodes[5].innerText,abstract:e.target.parentNode.parentNode.parentNode.childNodes[7].innerText,idLenght:u,id:e.target.parentNode.parentNode.parentNode.attributes[1].value,category:e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].innerText};c.push(t),localStorage.setItem(s,JSON.stringify(c)),e.target.parentNode.childNodes[3].classList.add("add"),e.target.classList.add("add"),e.target.parentNode.childNodes[1].innerHTML="Remove From Favorite",u+=1},p=function(e){c.map((function(t){e.querySelectorAll(".set").forEach((function(e){e.dataset.id===t.id&&(e.querySelector(".js-button_favorites").setAttribute("checked","true"),e.querySelector(".js-button_favorites").classList.add("add"),e.querySelector(".icon").classList.add("add"),e.querySelector("lable").innerHTML="Remove From Favorite")}))}))},v=function(){0!==c.length&&(u=c[c.length-1].idLenght+1||0)},N=null,b=function(e){var t={};if(!e)return;for(var n=0;n<e.length;n+=1){var r=e[n].readDate,a=e[n];t[r]?t[r].push(a):t[r]=[a]}return t}((0,o.getStorage)("readNews"));function m(e){return e.map((function(e){var t=e.photo,n=e.title,r=e.abstract,a=e.date,o=e.url,d=e.category,s=e.id,l=e.idLenght;return(0,i.markUpPage)(t,n,r,a,o,d,s,l)})).join("")}b?(a=b,Object.keys(a).forEach((function(e){var t="<div class='date-card'>\n  <button class='date-btn'><span class='date-btn__text'>".concat(e,'</span><span class=\'read_icon\'>\n  <svg class="date-btn___arrow" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg >\n  </span>\n  </button>\n   <div id=\'dateNowList\' class=\'list-news dates\'></div>\n  </div>');d.readNewsDateContainer.insertAdjacentHTML("beforeend",t)})),document.querySelectorAll(".date-btn").forEach((function(e){N=e.nextSibling.nextSibling;var t=e.firstElementChild.innerText,n=Object.keys(b),r=!0,a=!1,o=void 0;try{for(var i,d=n[Symbol.iterator]();!(r=(i=d.next()).done);r=!0){var s=i.value;s===t&&(N.innerHTML=m(b[s]),v(),document.querySelectorAll("#dateNowList").forEach((function(e){p(e),e.addEventListener("click",f)})))}}catch(e){a=!0,o=e}finally{try{r||null==d.return||d.return()}finally{if(a)throw o}}e.addEventListener("click",(function(){console.log(e.lastElementChild.firstElementChild),e.lastElementChild.firstElementChild.classList.toggle("arrow_rotate"),e.nextSibling.nextSibling.classList.toggle("show");var t=document.querySelector("#dateNowList");console.log(t),t.addEventListener("click",f)}))}))):d.notFound.classList.remove("not-found-hidden");var L=r("h6c0i");d=r("7rHhr"),o=r("bpWze"),i=r("aDyNI");d.searchForm.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.search.value.trim().toLowerCase();if(!t)return function(e){if(window.matchMedia("(max-width: 767px)").matches)return;L.Notify.info(e)}("What would you like to find?");(function(e){var t="readNews";d.readNewsDateContainer.innerHTML="";var n=document.querySelector(".read-list-news"),r=(0,o.getStorage)(t).filter((function(t){return t.title.toLowerCase().includes(e)}));a=r,d.notFound.classList.add("not-found-hidden"),0===a.length&&d.notFound.classList.remove("not-found-hidden"),function(e,t){var n=e.map((function(e){var t=e.photo,n=e.title,r=e.abstract,a=e.date,o=e.url,d=e.category,s=e.id,l=e.idLenght;return(0,i.markUpPage)(t,n,r,a,o,d,s,l)})).join("");t.innerHTML=n}(r,n);var a})(t),e.currentTarget.reset()}))}();
//# sourceMappingURL=read.7bd2b220.js.map