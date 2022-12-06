import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js'
import displayUser from './utils/displayUser.js'
const url = 'https://randomuser.me/api/';



// get User
//show User
//DOMCOntentLoaded
//Buttons

const btn = get('.btn');
const start = async () => {
  const person = await fetchUser();
  console.log(person);
  displayUser(person);
}

window.addEventListener('DOMContentLoaded',start);
btn.addEventListener('click',start);
