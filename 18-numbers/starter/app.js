const items=[...document.querySelectorAll(".number")];


const updateCount= (el) =>{
  let initialValue=0;
  const value=el.dataset.value;
const increment=Math.ceil(value/1000);

const increaseCount= setInterval( ()=>{


  if(initialValue>value){
    el.textContent= `${value}+`;
    clearInterval(increaseCount);
    return;
  }
  initialValue+=increment;
  el.textContent=`${initialValue}+`;

}

,1)



}
items.forEach((item)=>{
  updateCount(item);
})
