(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const i=document.getElementById("menu-toggle"),m=document.getElementById("menu-icon"),c=document.getElementById("side-menu"),p=document.getElementById("menu-overlay");function a(e){c.toggleAttribute("data-open",e),p.toggleAttribute("data-open",e),c.inert=!e,i.setAttribute("aria-expanded",String(e)),i.setAttribute("aria-label",e?"Close menu":"Open menu"),m.src=e?m.dataset.open:m.dataset.closed,document.documentElement.classList.toggle("overflow-hidden",e)}const f=()=>c.hasAttribute("data-open");i.addEventListener("click",()=>a(!f()));p.addEventListener("click",()=>a(!1));c.addEventListener("click",e=>{e.target.closest("a")&&a(!1)});document.addEventListener("keydown",e=>{e.key==="Escape"&&f()&&(a(!1),i.focus())});const d=[{common:"Collared Sunbird",scientific:"Hedydipna collaris",location:"Tzaneen",country:"South Africa",date:"2026-05-18",videoUrl:null}],y=document.getElementById("bird-tbody"),g=document.getElementById("empty-state"),x=document.getElementById("stat-species"),h=document.getElementById("stat-countries"),v=new Intl.DateTimeFormat("en-ZA",{year:"numeric",month:"short",day:"numeric"});function b(e){const[n,l,r]=e.split("-").map(Number);return v.format(new Date(n,l-1,r))}function s(e){return String(e).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}function w(e){const n=e.videoUrl?`<a
        href="${s(e.videoUrl)}"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition-all duration-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white"
      >Watch</a>`:"";return`
    <tr class="transition-colors duration-200 hover:bg-stone-50/80">
      <td class="px-4 py-5 text-center">
        <span class="font-serif text-sm italic text-stone-400">${e.number}</span>
      </td>
      <td class="min-w-[320px] px-8 py-5">
        <div class="text-[15px] font-medium leading-snug text-stone-800">${s(e.common)}</div>
      </td>
      <td class="min-w-60 px-5 py-5">
        <div class="text-sm italic text-stone-500">${s(e.scientific)}</div>
      </td>
      <td class="min-w-55 px-5 py-5 text-sm text-stone-600">${s(e.location)}</td>
      <td class="px-5 py-5">
        <span class="inline-flex items-center whitespace-nowrap rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">${s(e.country)}</span>
      </td>
      <td class="whitespace-nowrap px-5 py-5 text-sm text-stone-500">${b(e.date)}</td>
      <td class="px-5 py-5">${n}</td>
    </tr>`}x.textContent=d.length;h.textContent=new Set(d.map(e=>e.country)).size;g.classList.toggle("hidden",d.length>0);const E=d.map((e,n)=>({...e,number:n+1})).reverse();y.innerHTML=E.map(w).join("");
