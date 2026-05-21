(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function f(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(n){if(n.ep)return;n.ep=!0;const s=f(n);fetch(n.href,s)}})();const y=[{common:"Ashy Flycatcher",scientific:"Spilopelia senegalensis",location:"Aqua Park, Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null},{common:"Collared Sunbird",scientific:"Spilopelia senegalensis",location:"Aqua Park, Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null}],g=document.getElementById("bird-tbody"),h=document.getElementById("search-input"),p=document.getElementById("country-filter"),w=document.getElementById("empty-state"),S=document.getElementById("stat-species"),C=document.getElementById("stat-countries"),B=document.getElementById("stat-videos");if(g&&h&&p){let f=function(t){const[e,o,c]=t.split("-").map(Number);return new Date(e,o-1,c).toLocaleDateString("en-ZA",{year:"numeric",month:"short",day:"numeric"})},u=function(t){S.textContent=new Set(t.map(e=>`${e.common}-${e.scientific}`)).size,C.textContent=new Set(t.map(e=>e.country)).size,B.textContent=t.filter(e=>e.videoUrl).length},n=function(){[...new Set(y.map(e=>e.country))].sort().forEach(e=>{const o=document.createElement("option");o.value=e,o.textContent=e,p.appendChild(o)})},s=function(t){return[...t].sort((e,o)=>{let c=e[i],r=o[i];return i==="date"?(c=new Date(c),r=new Date(r)):(c=String(c||"").toLowerCase(),r=String(r||"").toLowerCase()),c<r?a==="asc"?-1:1:c>r?a==="asc"?1:-1:0})},l=function(){const t=h.value.toLowerCase(),e=p.value;return y.filter(o=>{const c=!t||o.common.toLowerCase().includes(t)||o.scientific.toLowerCase().includes(t)||o.location.toLowerCase().includes(t)||o.country.toLowerCase().includes(t),r=!e||o.country===e;return c&&r})},L=function(t){if(!t.length){g.innerHTML="",w.style.display="block";return}w.style.display="none",g.innerHTML=t.map((e,o)=>{const c=a==="desc"&&i==="date"?y.length-o:o+1,r=e.videoUrl?`
          <a href="${e.videoUrl}" target="_blank" rel="noopener" class="watch-btn">
            Watch
          </a>
        `:"";return`
        <tr class="bird-row">
          <td class="col-num">
            <span class="row-num">${c}</span>
          </td>
          <td>
            <span class="bird-name">${e.common}</span>
          </td>
          <td>
            <span class="sci-name">${e.scientific}</span>
          </td>
          <td class="col-loc">${e.location}</td>
          <td>
            <span class="country-badge">${e.country}</span>
          </td>
          <td class="col-date">${f(e.date)}</td>
          <td>${r}</td>
        </tr>
      `}).join("")},m=function(){const t=l(),e=s(t);u(t),L(e)},v=function(){document.querySelectorAll("[data-sort]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const e=t.dataset.sort;i===e?a=a==="asc"?"desc":"asc":(i=e,a="asc"),m()})})};var b=f,$=u,A=n,P=s,O=l,q=L,x=m,D=v;let i="date",a="desc";h.addEventListener("input",m),p.addEventListener("change",m),n(),v(),m()}const I=document.getElementById("menuBtn"),d=document.getElementById("mobileMenu"),E=document.getElementById("mobilePanel");I.addEventListener("click",()=>{d.classList.toggle("opacity-0"),d.classList.toggle("pointer-events-none"),E.classList.toggle("translate-x-full")});d.addEventListener("click",i=>{i.target===d&&(d.classList.add("opacity-0"),d.classList.add("pointer-events-none"),E.classList.add("translate-x-full"))});
