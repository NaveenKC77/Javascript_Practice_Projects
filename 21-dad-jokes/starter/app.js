
const url='https://icanhazdadjoke.com/';

const getElement=(selection)=>{
  const element = document.querySelector(selection);
  if(element){
    return element;
  }
  else{

    console.log(`${selection} elemnent doesn't exist`);;
  }
}
const container= getElement(".container");
const btn =getElement(".btn");
const result=document.querySelector(".result");

btn.addEventListener('click',()=>{
fetchDadJoke();
})

const fetchDadJoke=async()=>{
  result.textContent='Loading....';
  try {
    const response = await fetch(url,{
      headers:{
        Accept:'application/json',
        'User-Agent':'learning app',
      }
    });
    if(!response.ok){
      throw new Error(`Whoops! there was an error`);
    }

    const data = await response.json();
    result.textContent=data.joke;
  } catch (e) {
    console.log(e.message)
    result.textContent='There was an error...';
  }

}
fetchDadJoke();
