var images = [{
    id: 1,
    src: "img-1.jpg",
    price: 10,
  },
  {
    id: 2,
    src: "img-2.jpg",
    price: 20,
  },
  {
    id: 3,
    src: "img-3.jpg",
    price: 30,
  },
  {
    id: 4,
    src: "img-4.jpg",
    price: 40,
  },
  {
    id: 5,
    src: "img-5.jpg",
    price: 50,
  },
  {
    id: 6,
    src: "img-6.jpg",
    price: 60,
  },
]

const featuredSection = document.querySelector(".featured-section");
const price = document.querySelector(".price");

window.addEventListener('DOMContentLoaded', function() {
  const sliderHTML = images.map(function(image) {
    return `<img src="${image.src}" alt="" class="thumbnail">`

  }).join("");
  slider.innerHTML = sliderHTML;
  featuredSection.innerHTML = `<img src=${images[1].src} class="featured" alt="">`
price.innerHTML=`${images[0].price}$`

  const thumbnails = document.querySelectorAll(".thumbnail");

  const featured = document.querySelector(".featured");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("mouseover", function() {
      this.classList.add("active");

  console.log(thumbnail.src);

      thumbnails.forEach(function(thumbNail) {

        if (thumbNail !== thumbnail) {
          thumbNail.classList.remove("active")
        }
      })

      featured.src = this.src;

    })
  })


})

const slider = document.getElementById("slider");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

prevBtn.addEventListener('click', function() {
  slider.scrollLeft -= 260;
})

nextBtn.addEventListener('click', function() {
  slider.scrollLeft += 260;
})
