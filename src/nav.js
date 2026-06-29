// --------------------
// Desktop Navigation
// --------------------

const btn = document.getElementById("desktopMenuBtn");

const sidebar = document.getElementById("desktopSidebar");

const overlay = document.getElementById("sidebarOverlay");

const icon = document.getElementById("menuIcon");



let open = false;

btn.onclick = () => {

    open = !open;

    if(open){

        sidebar.classList.remove("-translate-x-full");

        overlay.classList.remove("hidden");

        icon.src="/images/navbar/hamburger-open.svg";


    }else{

        sidebar.classList.add("-translate-x-full");

        overlay.classList.add("hidden");

        icon.src="/images/navbar/hamburger-closed.svg";


    }

}

overlay.onclick = () =>{

    open=false;

    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");

   icon.src="/images/navbar/hamburger-closed.svg";

}

// --------------------
// Mobile Navigation
// --------------------

const mobileBtn = document.getElementById("menuBtn");

const mobileIcon = document.getElementById("mobileMenuIcon");

const mobilePanel = document.getElementById("mobilePanel");

const mobileOverlay = document.getElementById("mobileMenu");

let mobileOpen = false;

mobileBtn.onclick = () => {

    mobileOpen = !mobileOpen;

    if(mobileOpen){

        mobilePanel.classList.remove("-translate-x-full");

        mobileOverlay.classList.remove("opacity-0","pointer-events-none");

        mobileIcon.src="/images/navbar/hamburger-open.svg";

    }else{

        mobilePanel.classList.add("-translate-x-full");

        mobileOverlay.classList.add("opacity-0","pointer-events-none");

        mobileIcon.src="/images/navbar/hamburger-closed.svg";

    }

}

mobileOverlay.onclick = () => {

    mobileOpen = false;

    mobilePanel.classList.add("-translate-x-full");

    mobileOverlay.classList.add("opacity-0","pointer-events-none");

    mobileIcon.src="/images/navbar/hamburger-closed.svg";

}
