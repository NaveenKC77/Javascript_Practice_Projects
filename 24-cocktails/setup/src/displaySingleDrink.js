import get from './getElement.js';

const drinkName = get(".drink-name");
const drinkDesc = get(".drink-desc");
const drinkIngred = get(".drink-ingredients");
const drinkImg = get(".drink-img");

const displaySingleDrink = async({drinks})=>{
  //ingredients ,image, name

  const drink =drinks[0];

  const {strDrink:name,strDrinkThumb:img,strInstructions:instructions}=drink;
  const list =[drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5];

const ingredlist=list.map((item)=>{
  if(!item){
  return
  }
    return `<li><i class="far fa-check-square"></i>${item}</li>`;

}).join(" ");

drinkImg.src=img;
drinkName.textContent=name;
drinkDesc.textContent=instructions;
drinkIngred.innerHTML = ingredlist;
}

export default displaySingleDrink;
