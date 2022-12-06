import get from './getElement.js';

const title=get(".user-title");
const value=get(".user-value");
const img= get(".user-img");
const btn =get(".btn");
const btns=[...document.querySelectorAll('.icon')];

const displayUser = (data)=>{
  title.textContent = `My name is`;
  value.textContent = data.name;
  img.src=data.image
  btns[0].classList.add('active');

  btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      btns.forEach((btn)=>{
        btn.classList.remove('active');
      })
      btn.classList.add("active");
      const label =btn.dataset.label;

      title.textContent= `My ${label} is`;
      value.textContent=data[label];
    })
  })
}
export default displayUser;
