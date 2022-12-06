// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const navCenter = document.querySelector(".nav-center");
const toggleBar = document.querySelector(".toggle-bar");
const closeSign = document.querySelector(".close-btn");



navToggle.addEventListener('click',function(){
  navToggle.classList.toggle('hide-toggle-bar');
navCenter.classList.toggle('show-nav-center');

})

closeSign.addEventListener('click',function(){
  navCenter.classList.toggle('show-nav-center');
  navToggle.classList.toggle('hide-toggle-bar');

})
