import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title=document.querySelector(".section-title h1");
let index=0;
let pages=[];

const container = document.querySelector(".container");
const btnContainer =document.querySelector(".btn-container");

btnContainer.addEventListener('click',(e)=>{

  if(e.target.classList.contains("page-btn")){
    index=parseInt(e.target.dataset.index);
  }
if(e.target.classList.contains("next-btn")){
  index++;
  if (index>pages.length-1){
    index=0;
  }
}
if(e.target.classList.contains("prev-btn")){
  index--;
  if (index<0){
    index=pages.length-1;
  }
}
buttonsFunction()
})

const buttonsFunction=()=>{
  displayFollowers(pages[index]);
  displayButtons(pages,index);
}

const init=async()=>{
  const followers=await fetchFollowers();
  title.textContent ="pagination";
  pages =paginate(followers);
  buttonsFunction();
}
window.addEventListener('load',init);
