(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function g(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(o){if(o.ep)return;o.ep=!0;const c=g(o);fetch(o.href,c)}})();const x=[{common:"Cape Parrot",scientific:"Poicephalus robustus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-29",videoUrl:null},{common:"Olive Woodpecker",scientific:"Mesopicos griseocephalus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-27",videoUrl:null},{common:"Yellow-streaked Greenbul",scientific:"Phyllastrephus flavostriatus",location:"Magoebaskloof",country:"South Africa",date:"2026-05-27",videoUrl:null},{common:"Ashy Flycatcher",scientific:"Muscicapa caerulescens",location:"Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null},{common:"Collared Sunbird",scientific:"Spilopelia senegalensis",location:"Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null}],w=document.getElementById("bird-tbody"),E=document.getElementById("search-input"),v=document.getElementById("country-filter"),M=document.getElementById("empty-state"),A=document.getElementById("stat-species"),D=document.getElementById("stat-countries");if(w&&E&&v){let g=function(n){const[e,s,a]=n.split("-").map(Number);return new Date(e,s-1,a).toLocaleDateString("en-ZA",{year:"numeric",month:"short",day:"numeric"})},u=function(n){A.textContent=new Set(n.map(e=>`${e.common}-${e.scientific}`)).size,D.textContent=new Set(n.map(e=>e.country)).size},o=function(){[...new Set(x.map(e=>e.country))].sort().forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=e,v.appendChild(s)})},c=function(n){return[...n].sort((e,s)=>{let a=e[t],r=s[t];return t==="date"?(a=new Date(a),r=new Date(r)):(a=String(a||"").toLowerCase(),r=String(r||"").toLowerCase()),a<r?i==="asc"?-1:1:a>r?i==="asc"?1:-1:0})},d=function(){const n=E.value.toLowerCase(),e=v.value;return x.filter(s=>{const a=!n||s.common.toLowerCase().includes(n)||s.scientific.toLowerCase().includes(n)||s.location.toLowerCase().includes(n)||s.country.toLowerCase().includes(n),r=!e||s.country===e;return a&&r})},B=function(n){if(!n.length){w.innerHTML="",M.style.display="block";return}M.style.display="none",w.innerHTML=n.map((e,s)=>{const a=i==="desc"&&t==="date"?x.length-s:s+1,r=e.videoUrl?`
          <a href="${e.videoUrl}" target="_blank" rel="noopener" class="watch-btn">
            Watch
          </a>
        `:"";return`
  <tr class="border-b border-stone-100 hover:bg-stone-50/80 transition-colors duration-200">

    <!-- Number -->
    <td class="px-4 py-5 text-center">
      <span class="font-serif italic text-sm text-stone-400">
        ${a}
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
      ${g(e.date)}
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
`}).join("")},m=function(){const n=d(),e=c(n);u(n),B(e)},S=function(){document.querySelectorAll("[data-sort]").forEach(n=>{n.style.cursor="pointer",n.addEventListener("click",()=>{const e=n.dataset.sort;t===e?i=i==="asc"?"desc":"asc":(t=e,i="asc"),m()})})};var W=g,q=u,F=o,H=c,Y=d,_=B,j=m,G=S;let t="date",i="desc";E.addEventListener("input",m),v.addEventListener("change",m),o(),S(),m()}const P=document.getElementById("desktopMenuBtn"),p=document.getElementById("desktopSidebar"),f=document.getElementById("sidebarOverlay"),h=document.getElementById("menuIcon"),N=document.getElementById("contactButton"),C=document.getElementById("desktopHeaderInner"),U=document.getElementById("desktopLogo"),O=document.getElementById("desktopMail"),L=document.getElementById("menuBtn"),y=document.getElementById("mobilePanel"),l=document.getElementById("mobileOverlay"),$=document.getElementById("mobileMenuIcon");function k(){if(window.innerWidth<1024)return;const t=window.scrollY>50;C.classList.toggle("h-24",!t),C.classList.toggle("h-20",t),U.style.transform=t?"scale(0.78)":"scale(1)",O.classList.toggle("h-10",!t),O.classList.toggle("h-8",t),h.classList.toggle("h-8",!t),h.classList.toggle("h-7",t),p.classList.toggle("pt-24",!t),p.classList.toggle("pt-20",t),N.style.transform=t?"scale(0.82)":"scale(1)"}window.addEventListener("scroll",k,{passive:!0});window.addEventListener("resize",k);window.addEventListener("load",k);function z(){p.classList.remove("-translate-x-full"),f.classList.remove("opacity-0","pointer-events-none"),f.classList.add("opacity-100"),h.src="/images/navbar/hamburger-open.svg"}function I(){p.classList.add("-translate-x-full"),f.classList.remove("opacity-100"),f.classList.add("opacity-0","pointer-events-none"),h.src="/images/navbar/hamburger-closed.svg"}P.addEventListener("click",()=>{p.classList.contains("-translate-x-full")?z():I()});f.addEventListener("click",I);function T(){y.classList.remove("-translate-x-full"),l.classList.remove("hidden"),l.classList.remove("opacity-0"),l.classList.add("opacity-100"),$.src="/images/navbar/hamburger-open.svg",L.classList.add("scale-95"),document.body.classList.add("overflow-hidden")}function b(){y.classList.add("-translate-x-full"),l.classList.remove("opacity-100"),l.classList.add("opacity-0"),setTimeout(()=>{l.classList.add("hidden")},250),$.src="/images/navbar/hamburger-closed.svg",L.classList.remove("scale-95"),document.body.classList.remove("overflow-hidden")}L.addEventListener("click",()=>{y.classList.contains("-translate-x-full")?T():b()});l.addEventListener("click",t=>{y.contains(t.target)||L.contains(t.target)||b()});document.addEventListener("keydown",t=>{t.key==="Escape"&&(I(),b())});y.querySelectorAll("a").forEach(t=>{t.addEventListener("click",b)});
