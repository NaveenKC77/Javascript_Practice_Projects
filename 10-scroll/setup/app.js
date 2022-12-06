// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navBar=document.querySelector("#nav")

navToggle.addEventListener('click',function(){
  // linksContainer.classList.toggle("show-links");

  const linksHeight =links.getBoundingClientRect().height;

  const containerHeight=linksContainer.getBoundingClientRect().height;

if(containerHeight===0){
  linksContainer.style.height=`${linksHeight}px`;
}
else{
  linksContainer.style.height=0;
}
})

// fixed nav according to scrol heights

window.addEventListener('scroll',function(e){
  const scrollHeight=e.currentTarget.pageYOffset;
  console.log(scrollHeight);

  const linksHeight =links.getBoundingClientRect().height;
  const containerHeight=linksContainer.getBoundingClientRect().height;

  if(scrollHeight>containerHeight){
    navBar.classList.add("fixed-nav");
  }
  else{
    navBar.classList.remove("fixed-nav");
  }

const topLink = document.querySelector(".top-link");
if (scrollHeight>500){
  topLink.classList.add("show-link");
}
else{
  topLink.classList.remove("show-link");
}
});

// fixing smooth scroll behaviour

const linkItems = document.querySelectorAll(".scroll-link");

linkItems.forEach(function(link){
  link.addEventListener('click',function(e){

    e.preventDefault();

  const id= e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);

const navHeight = navBar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const fixedNav = navBar.classList.contains("fixed-nav");

  let topPosition = element.offsetTop-navHeight;

if(!fixedNav){
  topPosition=topPosition-navHeight;
}
if(navHeight>82){
  topPosition=topPosition+containerHeight;
}

window.scrollTo(
  {left:0,
  top:topPosition}
)

linksContainer.style.height=0;

  })
})
