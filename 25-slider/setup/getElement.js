const getElement = (selection)=>{
  const element = document.querySelector(selection);
  if(element){
    return element;
  }
  else{
    console.log(`The element for ${selection} doesn't exist`);
  }
}

export default getElement;
