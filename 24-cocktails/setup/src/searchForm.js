import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";
import fetchDrinks from './fetchDrinks.js';

const form = get(".search-form");
const input = document.querySelector('[name="drink"]');
const baseURL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

form.addEventListener('keyup',async(e)=>{
  e.preventDefault();
  const value =input.value;
 presentDrinks(`${baseURL}${value}`);


})

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b
