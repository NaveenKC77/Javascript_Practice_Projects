import get from "./getElement.js";
const sectionCenter = get(".section-center");
const title = get(".title");

const displayDrinks = ({
  drinks
}) => {

  if (!drinks) {
    title.innerHTML = "No drinks found....";
    sectionCenter.innerHTML = null;
  } else {
    const newDrinks = drinks.map((drink) => {
      const {
        idDrink: id,
        strDrink: name,
        strDrinkThumb: image
      } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    }).join(" ");
    sectionCenter.innerHTML = newDrinks;

  }
  return sectionCenter;
}


export default displayDrinks;
