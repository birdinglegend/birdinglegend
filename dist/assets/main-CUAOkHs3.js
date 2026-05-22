(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function p(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(n){if(n.ep)return;n.ep=!0;const s=p(n);fetch(n.href,s)}})();const y=[{common:"Ashy Flycatcher",scientific:"Spilopelia senegalensis",location:"Aqua Park, Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null},{common:"Collared Sunbird",scientific:"Spilopelia senegalensis",location:"Aqua Park, Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null}],g=document.getElementById("bird-tbody"),h=document.getElementById("search-input"),f=document.getElementById("country-filter"),L=document.getElementById("empty-state"),E=document.getElementById("stat-species"),b=document.getElementById("stat-countries"),C=document.getElementById("stat-videos");if(g&&h&&f){let p=function(t){const[e,o,c]=t.split("-").map(Number);return new Date(e,o-1,c).toLocaleDateString("en-ZA",{year:"numeric",month:"short",day:"numeric"})},u=function(t){E.textContent=new Set(t.map(e=>`${e.common}-${e.scientific}`)).size,b.textContent=new Set(t.map(e=>e.country)).size,C.textContent=t.filter(e=>e.videoUrl).length},n=function(){[...new Set(y.map(e=>e.country))].sort().forEach(e=>{const o=document.createElement("option");o.value=e,o.textContent=e,f.appendChild(o)})},s=function(t){return[...t].sort((e,o)=>{let c=e[a],r=o[a];return a==="date"?(c=new Date(c),r=new Date(r)):(c=String(c||"").toLowerCase(),r=String(r||"").toLowerCase()),c<r?i==="asc"?-1:1:c>r?i==="asc"?1:-1:0})},l=function(){const t=h.value.toLowerCase(),e=f.value;return y.filter(o=>{const c=!t||o.common.toLowerCase().includes(t)||o.scientific.toLowerCase().includes(t)||o.location.toLowerCase().includes(t)||o.country.toLowerCase().includes(t),r=!e||o.country===e;return c&&r})},x=function(t){if(!t.length){g.innerHTML="",L.style.display="block";return}L.style.display="none",g.innerHTML=t.map((e,o)=>{const c=i==="desc"&&a==="date"?y.length-o:o+1,r=e.videoUrl?`
          <a href="${e.videoUrl}" target="_blank" rel="noopener" class="watch-btn">
            Watch
          </a>
        `:"";return`
  <tr class="border-b border-stone-100 hover:bg-stone-50/80 transition-colors duration-200">

    <!-- Number -->
    <td class="px-4 py-5 text-center">
      <span class="font-serif italic text-sm text-stone-400">
        ${c}
      </span>
    </td>

    <!-- Common Name -->
    <td class="px-8 py-5 min-w-[320px]">

      <div class="font-medium text-[15px] text-stone-800 leading-snug">
        ${e.common}
      </div>

    </td>

    <!-- Scientific -->
    <td class="px-5 py-5 min-w-[240px]">

      <div class="italic text-sm text-stone-500">
        ${e.scientific}
      </div>

    </td>

    <!-- Location -->
    <td class="px-5 py-5 text-sm text-stone-600 min-w-[220px]">
      ${e.location}
    </td>

    <!-- Country -->
    <td class="px-5 py-5">

      <span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 whitespace-nowrap">
        ${e.country}
      </span>

    </td>

    <!-- Date -->
    <td class="px-5 py-5 text-sm text-stone-500 whitespace-nowrap">
      ${p(e.date)}
    </td>

    <!-- Watch -->
    <td class="px-5 py-5">

      ${r?`
          <a
            href="${e.videoUrl}"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200"
          >
            Watch
          </a>
        `:""}

    </td>

  </tr>
`}).join("")},m=function(){const t=l(),e=s(t);u(t),x(e)},v=function(){document.querySelectorAll("[data-sort]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const e=t.dataset.sort;a===e?i=i==="asc"?"desc":"asc":(a=e,i="asc"),m()})})};var B=p,I=u,$=n,A=s,P=l,N=x,D=m,O=v;let a="date",i="desc";h.addEventListener("input",m),f.addEventListener("change",m),n(),v(),m()}const S=document.getElementById("menuBtn"),d=document.getElementById("mobileMenu"),w=document.getElementById("mobilePanel");S.addEventListener("click",()=>{d.classList.toggle("opacity-0"),d.classList.toggle("pointer-events-none"),w.classList.toggle("translate-x-full")});d.addEventListener("click",a=>{a.target===d&&(d.classList.add("opacity-0"),d.classList.add("pointer-events-none"),w.classList.add("translate-x-full"))});
