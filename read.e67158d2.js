!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n.register("aXXqe",(function(e,t){var r=n("h6c0i"),a=n("7rHhr"),o=n("bpWze"),i=n("aDyNI"),d=n("avnjS"),s=document.body.dataset.set;function u(e,t){var r=e.map((function(e){var t=e.photo,r=e.title,n=e.abstract,a=e.date,o=e.url,d=e.category,s=e.id,u=e.idLenght;return(0,i.markUpPage)(t,r,n,a,o,d,s,u)})).join("");t.innerHTML=r}function c(e){a.notFound.classList.add("not-found-hidden"),0===e.length&&a.notFound.classList.remove("not-found-hidden")}a.searchForm.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.search.value.trim().toLowerCase();if(!t)return n="What would you like to find?",void r.Notify.info(n);var n;(function(e){var t="";if("favorite"===s){t="ID-SAVE-FAVORITE";var r=document.querySelector(".list-news");r.innerHTML="";var n=(0,o.getStorage)(t).filter((function(t){return t.title.toLowerCase().includes(e)}));c(n),u(n,r),(0,d.auditArrayNews)()}if("read"===s){a.readNewsDateContainer.innerHTML="",t="readNews";var i=document.querySelector(".read-list-news"),l=(0,o.getStorage)(t).filter((function(t){return t.title.toLowerCase().includes(e)}));c(l),u(l,i)}})(t),e.currentTarget.reset()}))})),n.register("avnjS",(function(e,t){var r,a,o,i;r=e.exports,a="auditArrayNews",o=function(){return f},Object.defineProperty(r,a,{get:o,set:i,enumerable:!0,configurable:!0});var d,s=n("aDyNI"),u=document.querySelector(".list-news"),c=localStorage.getItem("ID-SAVE-FAVORITE"),l=JSON.parse(c)||[];function f(){l.map((function(e){u.querySelectorAll(".set").forEach((function(t){t.dataset.id===e.id&&(t.querySelector(".js-button_favorites").setAttribute("checked","true"),t.querySelector(".js-button_favorites").classList.add("add"),t.querySelector("svg").classList.add("add"),t.querySelector("lable").innerHTML="RemoveFromFavorite")}))}))}u.addEventListener("change",(function(e){if(!e.target.classList.contains("button"))return;if(e.target.classList.contains("add")){var t=+l.findIndex((function(t){return t.idLenght===+e.target.attributes[2].value}));console.log(e.target.attributes[2].value),l.splice(t,1),localStorage.setItem("ID-SAVE-FAVORITE",JSON.stringify(l)),e.target.parentNode.parentNode.parentNode.remove()}})),d=l.map((function(e){var t=e.url,r=(e.media,e.title),n=e.abstract,a=e.date,o=e.photo,i=e.id,d=e.idLenght,u=e.category;return console.log(r),(0,s.markUpPage)(o,r,n,a,t,u,i,d)})).join(""),u.insertAdjacentHTML("beforeend",d),f()}))}();
//# sourceMappingURL=read.e67158d2.js.map
