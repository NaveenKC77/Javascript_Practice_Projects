import people from './data.js';
import get from './getElement.js';

const container =get(".slide-container");
const nextBtn = get(".next-btn");
const prevBtn = get(".prev-btn");

window.addEventListener('DOMContentLoaded',()=>{
container.innerHTML=  people.map((person,slideIndex)=>{
const {img,name,job,text}=person;
let position = "next";
if(slideIndex===0){
  position="active";
}
if (slideIndex===people.length-1){
  position ="last";
}

return `<article class="slide ${position}">
  <img
    src=${img}
    alt=${name}
    class="img"
  />
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
    ${text}
  </p>
  <div class="quote-icon">
    <i class="fas fa-quote-right"></i>
  </div>
</article>`

}).join(" ");
})

const startSlider=(type)=>{
const active =get(".active");
const last = get(".last");
let next = active.nextElementSibling;

if(!next){
  next=container.firstElementChild;
}
active.classList.remove("active");
last.classList.remove("last");
next.classList.remove("next");

if(type==="prev"){
  active.classList.add("next");
  last.classList.add("active");
  next = last.previousElementSibling;

  if(!next){
    next=container.lastElementChild
    }
    next.classList.remove("next");
    next.classList.add("last");
    return
}
active.classList.add("last");
last.classList.add("next");
next.classList.add("active");
}

prevBtn.addEventListener('click',()=>{
  startSlider("prev");
})
nextBtn.addEventListener('click',()=>{
  startSlider();
})
