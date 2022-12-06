import get from "./src/getElement.js";
import displaySingleDrink from './src/displaySingleDrink.js'
import fetchDrinks from './src/fetchDrinks.js'
import {
  hideLoading
} from "./src/toggleLoading.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const loading = get(".loading");

const id = localStorage.getItem("drink");
console.log(id);

const showDrink = async () => {
  // const response = await fetch(`${URL}${id}`);
  // const data = await response.json();
  const data =await fetchDrinks(`${URL}${id}`);
  hideLoading();
  displaySingleDrink(data);

};
showDrink();
