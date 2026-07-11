// Smooth Navbar Shadow

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".8s";

observer.observe(section);

});