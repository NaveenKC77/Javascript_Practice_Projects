const btn=document.querySelector(".btn");
const container=document.querySelector(".container");

import {people} from './utils/data.js';
import showPeople from './utils/showPeople.js';

btn.addEventListener('click',()=>{
  container.innerHTML=showPeople(people);
})
