// ==========================
// GULYANI STYLE HUNT
// Premium JavaScript
// ==========================

// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },600);

});


// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.background="#111";

        navbar.style.padding="15px 8%";

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.55)";

        navbar.style.padding="18px 8%";

        navbar.style.boxShadow="none";

    }

});


// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// Counter Animation

const counters=document.querySelectorAll(".counter-box h1");

let started=false;

window.addEventListener("scroll",()=>{

const counter=document.querySelector(".counter");

if(!counter) return;

const top=counter.offsetTop-500;

if(window.scrollY>top && !started){

started=true;

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/80;

let update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

if(target===25){

counter.innerText="25%";

}

else if(target===100){

counter.innerText="100%";

}

else{

counter.innerText=target+"+";

}

}

};

update();

});

}

});


// Mobile Menu

const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


// Scroll To Top Button

const topBtn=document.createElement("div");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Gallery Zoom

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

let overlay=document.createElement("div");

overlay.className="image-view";

overlay.innerHTML=`

<span class="close">&times;</span>

<img src="${img.src}">

`;

document.body.appendChild(overlay);

overlay.querySelector(".close").onclick=()=>{


overlay.remove();

};

overlay.onclick=(e)=>{

if(e.target===overlay){

overlay.remove();

}

};

};

});


// Current Year

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`©️ ${new Date().getFullYear()} Gulyani Style Hunt | All Rights Reserved`;

}