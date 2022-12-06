import get from "./getElement.js";
import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
const sectionCenter = get(".section-center")
import setDrink from "./setDrink.js";
import {showLoading} from "./toggleLoading.js";
import {hideLoading} from "./toggleLoading.js";

const presentDrinks= async(url)=>{
  const drinks = await fetchDrinks(url);
hideLoading();
  displayDrinks(drinks);
  if (sectionCenter) {
    setDrink(sectionCenter);
  }

}

export default presentDrinks;
