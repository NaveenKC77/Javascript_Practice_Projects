const container = document.querySelector(".container");
const gallery = document.querySelector(".gallery");
const popup = document.querySelector(".popup");
const galleryIndex = [1, 2, 3, 4, 5, 6, 7, 8];
const selectedImage = [];
console.log(galleryIndex.length);
galleryIndex.forEach(function(index) {

  // Loading Images
  const image = document.createElement("img");
  image.src = `./images/img-${index}.jpg`;
  image.classList.add("image");
  console.log(image);
  gallery.append(image);


  image.addEventListener('click', function() {

    //Creating popup
    var selectedImage=index;
    const popupImg = document.createElement("img");
    popupImg.src = `./images/img-${selectedImage}.jpg`;
    popupImg.id = "selectedImage";
    popup.appendChild(popupImg);
    popup.style.transform = "translateY(0)";

    //Adding buttons to PopUp
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prevBtn","btn");
    prevBtn.innerHTML = `<i class="fas fa-angle-left"></i>`

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("nextBtn","btn");
    nextBtn.innerHTML = `<i class="fas fa-angle-right"></i>`;

    const exitBtn = document.createElement("button");
    exitBtn.classList.add("exitBtn","btn");
    exitBtn.innerHTML = `<i class="fas fa-times"></i>`;
    popup.append(prevBtn, nextBtn, exitBtn);

    //Functionality of carousel

carousel();

    //EVENT lISTENERS FOR BUTTONS
    prevBtn.addEventListener('click', function() {
      selectedImage--;
      popupImg.src = `./images/img-${selectedImage}.jpg`;
      carousel();
    })

    nextBtn.addEventListener("click", function() {

      selectedImage++;
      popupImg.src = `./images/img-${selectedImage}.jpg`;
carousel();
    })

    exitBtn.addEventListener('click', function() {
      popupImg.src = ``;
      popupImg.id = "";
      popup.style.transform = "translateY(-100%)";
    })

    function carousel() {
      if (selectedImage <= 1) {
        prevBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
      }
      if (selectedImage >= galleryIndex.length ) {
        nextBtn.style.display = "none";
      } else {
        nextBtn.style.display = "block";
      }
    }

  })

})


// function showPopup(index){
//   const popupImg =document.createElement("img");
//   popupImg.src=`./images/img-${index}.jpg`;
//   popupImg.id="selectedImage";
//   popup.appendChild(popupImg);
//   popup.style.transform="translateY(0)";
// }
//
// function addCarousel(){
//
//
// }
// function carousel(){
//
// }
