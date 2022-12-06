// Promise DOM

// import {getElement} from "./get.js";
//
// const heading1=getElement(".one");
// const heading2=getElement(".four");
// const heading3=getElement(".three");
//
//
// changeColor(heading1,"red",1000)
// .then( ()=>changeColor(heading2,"blue",2000) )
// .then( ()=>changeColor(heading3,"green",1000) )
// .catch((err)=>console.log(err));
//
//
// function changeColor(element,color,time){
//   return new Promise ( (resolve,reject)=>{
//
//   if(element){
//     setTimeout(()=>{
//       element.style.color=color;
//       resolve();
//     },time)
//   }
//   else{
//     reject(new Error("Error: ") );
//   }
// });
// }


// Async/Await

import {
  getElement
} from "./get.js";

const heading1 = getElement(".one");
const heading2 = getElement(".two");
const heading3 = getElement(".three");
const btn = getElement(".btn");

btn.addEventListener('click', async () => {
  try {
    await changeColor(heading1, "red", 1000);
    await changeColor(heading2, "blue", 2000);
    await changeColor(heading3, "green", 1000);
  } catch (error) {
    console.log(error);
  }
});

function changeColor(element, color, time) {
  return new Promise((resolve, reject) => {

    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve('hello');
      }, time)
    } else {
      reject(new Error("Error: "));
    }
  });
}
