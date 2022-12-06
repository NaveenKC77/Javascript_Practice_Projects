export function getElement(selection){
  const element = document.querySelector(selection);
if(element){
  return element;
}
else{
  console.log(`Error: Element for your selection ${selection} doesn't exist`)
}
}
