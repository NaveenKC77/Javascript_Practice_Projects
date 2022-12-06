import sublinks from './data.js';

const sidebarLinks = document.querySelector(".sidebar-links");
const submenu = document.querySelector(".submenu");
const navLinks = document.querySelector(".nav-links");
const navItem = document.querySelectorAll(".nav-item")
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const hero=document.querySelector(".hero");

hero.addEventListener("mouseover",()=>{
submenu.classList.remove("show")});

toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add("active");

})
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove("active");

})

sidebarLinks.innerHTML = sublinks.map((sublink) => {
  const {
    page,
    links
  } = sublink;

  return `<h3 class="sidebar-sublinks-heading">${page}</h3>
 <div class="sidebar-sublinks">
 ${links.map((link)=>{
   const {label,icon,url}=link;
   return` <a href ="${url}"><i class ="${icon}"> </i>${label} </a> `
 }).join(" ")
 }
 </div>
 `;
}).join(" ");

navLinks.addEventListener("mouseover",(e)=>{
  e.preventDefault();
submenu.classList.add('show');
if(e.target.classList.contains("nav-item")){
  const tempBtn=e.target.getBoundingClientRect();
  console.log(tempBtn);
  const center = (tempBtn.left + tempBtn.right) / 2 ;
  console.log(center);
  const bottom = tempBtn.bottom - 3;
  const text = e.target.textContent.toLowerCase();  const tempPage = sublinks.find((link) => link.page === text);

  if(tempPage){
    console.log(tempPage);
    const {page,links}=tempPage;

  let columns =`col-${links.length}`;
  console.log(columns);
  submenu.innerHTML=`
  <h3 class="submenu-heading">${page}</h3>
  <div class="submenu-center ${columns}">
  ${links.map((link)=>{
    const {label,icon,url}=link;
    return` <a href ="${url}"><i class ="${icon}"> </i>${label} </a> `
  }).join(" ")
  }
  </div>`;
  console.log(center);
  submenu.style.left=`${center}px`;
  submenu.style.top=`${bottom}px`;
  }
}

});
