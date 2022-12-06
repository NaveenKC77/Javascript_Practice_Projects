

import get from "./src/getElement.js";
import fetchDrinks from "./src/fetchDrinks.js";
import displayDrinks from "./src/displayDrinks.js";
import presentDrinks from './src/presentDrinks.js';
import './src/searchform.js';

const section = get(".section");
const loading = get(".loading");
const title = get(".title");
const sectionCenter = get(".section-center")

const URL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";



window.addEventListener('DOMContentLoaded',async()=>{
  
  presentDrinks(URL);

});
