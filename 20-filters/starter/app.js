const productsContainer = document.querySelector(".products-container");

const companiesContainer = document.querySelector(".companies");

let filteredProducts = [...products];


window.addEventListener('DOMContentLoaded', function() {
  showProducts();
  displayMenuItems();
  const companyBtns = document.querySelectorAll(".company-btn");


    companiesContainer.addEventListener('click', function(e) {
      const el = e.target;

      if (el.classList.contains("company-btn")) {

        if (el.dataset.id ==='all') {
          filteredProducts=[...products];

        }
        else {
        filteredProducts = products.filter((product)=>{
          return product.company===el.dataset.id;
        })
        }
        console.log(products);
        searchBtn.value = '';
        showProducts();

      }

    })


  const searchBtn = document.querySelector(".search-input");

  searchBtn.addEventListener("keyup", function() {
    const searchTag = searchBtn.value;
    console.log(searchTag);
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTag);
    })
    showProducts();

  })
})

function displayMenuItems() {
  const companies = [];

  filteredProducts.forEach((product) => {
    companies.push(product.company);
  });

  const finalCompanies = ['all', ...new Set(companies)];
  console.log(finalCompanies);


  companiesContainer.innerHTML = finalCompanies.map((company) => {
    return `  <button class="company-btn" data-id="${company}">${company}</button>`
  }).join('');

}

function showProducts() {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<p>Sorry!! No items found</p>`
  } else {
    productsContainer.innerHTML = filteredProducts.map((product) => {
      const {
        id,
        title,
        company,
        image,
        price
      } = product;
      return `  <article class="product">
          <img
            src=${image}
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`
    }).join('');
  }

}
