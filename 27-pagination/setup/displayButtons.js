const btnContainer=document.querySelector(".btn-container");
const displayButtons = (pages,activeIndex) => {
let btnText=pages.map((page,pageIndex)=>{
  return `<button class="page-btn ${pageIndex===activeIndex?
 " active-btn":"null"}" data-index="${pageIndex}">${pageIndex+1}</button>`
});
btnText.push(`<button class="next-btn">Next</button>`)
btnText.unshift(`<button class="prev-btn">Prev</button>`)
btnContainer.innerHTML=btnText.join("");
}

export default displayButtons
