(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function m(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=m(n);fetch(n.href,s)}})();const v=[{common:"Cape Parrot",scientific:"Poicephalus robustus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-29",videoUrl:null},{common:"Olive Woodpecker",scientific:"Mesopicos griseocephalus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-27",videoUrl:null},{common:"Yellow-streaked Greenbul",scientific:"Phyllastrephus flavostriatus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-27",videoUrl:null},{common:"Ashy Flycatcher",scientific:"Muscicapa caerulescens",location:"Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null},{common:"Collared Sunbird",scientific:"Spilopelia senegalensis",location:"Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null}],b=document.getElementById("bird-tbody"),x=document.getElementById("search-input"),p=document.getElementById("country-filter"),C=document.getElementById("empty-state"),M=document.getElementById("stat-species"),$=document.getElementById("stat-countries");if(b&&x&&p){let m=function(t){const[e,o,c]=t.split("-").map(Number);return new Date(e,o-1,c).toLocaleDateString("en-ZA",{year:"numeric",month:"short",day:"numeric"})},d=function(t){M.textContent=new Set(t.map(e=>`${e.common}-${e.scientific}`)).size,$.textContent=new Set(t.map(e=>e.country)).size},n=function(){[...new Set(v.map(e=>e.country))].sort().forEach(e=>{const o=document.createElement("option");o.value=e,o.textContent=e,p.appendChild(o)})},s=function(t){return[...t].sort((e,o)=>{let c=e[i],r=o[i];return i==="date"?(c=new Date(c),r=new Date(r)):(c=String(c||"").toLowerCase(),r=String(r||"").toLowerCase()),c<r?a==="asc"?-1:1:c>r?a==="asc"?1:-1:0})},l=function(){const t=x.value.toLowerCase(),e=p.value;return v.filter(o=>{const c=!t||o.common.toLowerCase().includes(t)||o.scientific.toLowerCase().includes(t)||o.location.toLowerCase().includes(t)||o.country.toLowerCase().includes(t),r=!e||o.country===e;return c&&r})},I=function(t){if(!t.length){b.innerHTML="",C.style.display="block";return}C.style.display="none",b.innerHTML=t.map((e,o)=>{const c=a==="desc"&&i==="date"?v.length-o:o+1,r=e.videoUrl?`
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
      ${m(e.date)}
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
`}).join("")},u=function(){const t=l(),e=s(t);d(t),I(e)},B=function(){document.querySelectorAll("[data-sort]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const e=t.dataset.sort;i===e?a=a==="asc"?"desc":"asc":(i=e,a="asc"),u()})})};var A=m,P=d,U=n,N=s,D=l,z=I,F=u,T=B;let i="date",a="desc";x.addEventListener("input",u),p.addEventListener("change",u),n(),B(),u()}const k=document.getElementById("desktopMenuBtn"),L=document.getElementById("desktopSidebar"),g=document.getElementById("sidebarOverlay"),w=document.getElementById("menuIcon");let f=!1;k.onclick=()=>{f=!f,f?(L.classList.remove("-translate-x-full"),g.classList.remove("hidden"),w.src="/images/navbar/hamburger-open.svg"):(L.classList.add("-translate-x-full"),g.classList.add("hidden"),w.src="/images/navbar/hamburger-closed.svg")};g.onclick=()=>{f=!1,L.classList.add("-translate-x-full"),g.classList.add("hidden"),w.src="/images/navbar/hamburger-closed.svg"};const O=document.getElementById("menuBtn"),E=document.getElementById("mobileMenuIcon"),S=document.getElementById("mobilePanel"),h=document.getElementById("mobileMenu");let y=!1;O.onclick=()=>{y=!y,y?(S.classList.remove("-translate-x-full"),h.classList.remove("opacity-0","pointer-events-none"),E.src="/images/navbar/hamburger-open.svg"):(S.classList.add("-translate-x-full"),h.classList.add("opacity-0","pointer-events-none"),E.src="/images/navbar/hamburger-closed.svg")};h.onclick=()=>{y=!1,S.classList.add("-translate-x-full"),h.classList.add("opacity-0","pointer-events-none"),E.src="/images/navbar/hamburger-closed.svg"};
