const slides=document.querySelectorAll(".slide");

const prevBtn=document.querySelector(".prevBtn");

const nextBtn=document.querySelector(".nextBtn");

var counter=0;

console.log("hello");

slides.forEach(function(slide,index){
  slide.style.left=`${index*100}%`
})


prevBtn.addEventListener('click',function(){
  counter--;
  carousel();
})

nextBtn.addEventListener('click',function(){
  counter++;
  carousel();
})

function carousel(){
console.log(counter);
  if(counter>0){
    prevBtn.style.display="block"
  }
  else{
      prevBtn.style.display="none"
  }
  if(counter<slides.length-1){
  nextBtn.style.display="block"
  }
  else{
    nextBtn.style.display="none";
  }

  slides.forEach(function(slide){
    slide.style.transform=`translateX(-${counter*100}%)`;
  })
}
prevBtn.style.display="none";
//
