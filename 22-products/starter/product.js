const productsDOM=document.querySelector(".product")

const url ='https://course-api.com/javascript-store-single-product';

const fetchProduct = async()=>{

  try {
    productsDOM.innerHTML='<h4 class="loading></h4>"'
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const resp =  await fetch(`${url}?id=${id}`);
    const data= await resp.json();
    return data;
  } catch (e) {
    productsDOM.innerHTML='<p class="error"></p>'
  }

}
const displayProduct = (product)=>{
//name,company,price,colors,description.url

const{name:title,price,image,colors,description,company}=product.fields;
const {url:img}=image[0];

document.tile=title.toUpperCase();




const colorsList = colors.map((color)=>{
  return `<span class="product-color" style="background: ${color}"></span>`;
}).join('');

  productsDOM.innerHTML=  productsDOM.innerHTML = `<div class="product-wrapper">
          <img src="${img}" class="img" alt="${title}" />
          <div class="product-info">
            <h3>${title}</h3>
            <h5>${company}</h5>
            <span>${price / 100}</span>
            <div class="colors">
              ${colorsList}

            </div>
            <p>
             ${description}
            </p>
            <button class="btn">add to cart</button>
          </div>
        </div>`;
}

const start =async()=>{
  const data= await fetchProduct(url);
  displayProduct(data);
}
start();
