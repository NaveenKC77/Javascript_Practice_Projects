// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const btn = document.querySelector(".video-btn");
const switchBtn = document.querySelector(".switch");
const preLoader= document.querySelector(".pre-loader");
const video=document.querySelector(".video-container");


window.addEventListener('load',function(){
  preLoader.classList.add("hidden");
})

btn.addEventListener('click',function(){
  if(!switchBtn.classList.contains('slide')){
    switchBtn.classList.add("slide");
    video.pause();
  }
  else{
      switchBtn.classList.remove("slide");
      video.play();
  }
})
