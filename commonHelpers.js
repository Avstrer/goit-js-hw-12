import{a as p,s as h,i as c}from"./assets/vendor-5f30dad9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function m(a,r){const i="https://pixabay.com/api/",s=new URLSearchParams({key:"43017102-594f5d72a54901dbdf737fff3",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});return await p.get(`${i}?${s}`).then(t=>t).catch(t=>console.log(t))}const d=document.querySelector(".gallery");function u(a){const r=a.map(s=>`
        <div class="gallery-item">
        <a href="${s.largeImageURL}" class="photo-item">
        <img class='img' src="${s.webformatURL}" 
        alt="${s.tags}"/>
        </a>
        <ul class="text-list">
        <li class="list-item">Likes:<span class="image-text">${s.likes}</span></li>
        <li class="list-item">Views:<span class="image-text">${s.views}</span></li>
        <li class="list-item">Comments:<span class="image-text">${s.comments}</span></li>
        <li class="list-item">Downloads:<span class="image-text">${s.downloads}</span></li>
        </ul>
        </div>

      `).join(" ");d.insertAdjacentHTML("beforeend",r),new h(".gallery a").refresh()}const o=document.querySelector(".loader"),n=document.querySelector(".addButton"),g=document.querySelector("form");g.addEventListener("submit",y);n.addEventListener("click",L);let f=1;function y(a){a.preventDefault(),d.innerHTML="",n.classList.add("visible-hidden");const r=a.target.elements.formInput.value.trim();r===""?(c.error({color:"red",message:"Please,type any text",position:"topRight",title:"Error"}),d.innerHTML=""):m(r,f).then(i=>{i.data.hits.length<1?c.error({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",title:"Oops"}):(o.classList.add("show"),setTimeout(()=>{n.classList.remove("visible-hidden"),o.classList.remove("show"),u(i.data.hits)},0))}).catch(i=>console.log(i))}function L(a){a.preventDefault();const r=g.elements.formInput.value.trim(),i=f+=1;o.classList.add("show"),setTimeout(()=>{o.classList.remove("show"),m(r,i).then(s=>{i*15>s.data.totalHits&&(n.classList.add("visible-hidden"),c.show({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",color:"pink",position:"topRight"})),u(s.data.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2+48,behavior:"smooth"})})},0)}
//# sourceMappingURL=commonHelpers.js.map
