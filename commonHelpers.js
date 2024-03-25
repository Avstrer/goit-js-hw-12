import{a as p,s as h,i as c}from"./assets/vendor-5f30dad9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function u(i,r){const a="https://pixabay.com/api/",e=new URLSearchParams({key:"43017102-594f5d72a54901dbdf737fff3",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});return await p.get(`${a}?${e}`).then(s=>s).catch(s=>console.log(s))}const d=document.querySelector(".gallery");async function g(i){const r=i.map(e=>`
        <div class="gallery-item">
        <a href="${e.largeImageURL}" class="photo-item">
        <img class='img' src="${e.webformatURL}" 
        alt="${e.tags}"/>
        </a>
        <ul class="text-list">
        <li class="list-item">Likes:<span class="image-text">${e.likes}</span></li>
        <li class="list-item">Views:<span class="image-text">${e.views}</span></li>
        <li class="list-item">Comments:<span class="image-text">${e.comments}</span></li>
        <li class="list-item">Downloads:<span class="image-text">${e.downloads}</span></li>
        </ul>
        </div>

      `).join(" ");d.insertAdjacentHTML("beforeend",r),new h(".gallery a").refresh()}const o=document.querySelector(".loader"),n=document.querySelector(".addButton"),f=document.querySelector("form");f.addEventListener("submit",y);n.addEventListener("click",L);let m;async function y(i){i.preventDefault(),m=1,d.innerHTML="",n.classList.add("visible-hidden");const r=i.target.elements.formInput.value.trim();r===""?(c.error({color:"red",message:"Please,type any text",position:"topRight",title:"Error"}),d.innerHTML=""):await u(r,m).then(a=>{a.data.hits.length<1?c.error({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",title:"Oops"}):(o.classList.add("show"),n.classList.remove("visible-hidden"),o.classList.remove("show"),g(a.data.hits))}).catch(a=>console.log(a))}async function L(i){i.preventDefault();const r=f.elements.formInput.value.trim(),a=m+=1;o.classList.add("show"),o.classList.remove("show"),await u(r,a).then(e=>{a*15>e.data.totalHits&&(n.classList.add("visible-hidden"),c.show({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",color:"pink",position:"topRight"})),g(e.data.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2+48,behavior:"smooth"})}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map
